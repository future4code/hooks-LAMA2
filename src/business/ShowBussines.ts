import { ShowDataBase } from "../data/ShowDataBase";
import { CustomError, FullSchedule, InvalidAuthenticatorData, InvalidDay, InvalidEndTime, InvalidInfos, InvalidStartTime, InvalidTime, InvalidToken } from "../error/UserError";
import { Show, ShowDTO } from "../model/Show";
import { IdGenerator } from "../services/IdGenerator";

const showDatabase = new ShowDataBase();
const tokenGenerator = new TokenGenerator();

export class ShowBusiness {
  public async createShow(show: ShowDTO, token: string) {
    try {
      const { day, startTime, endTime, bandId } = show;

      if (!token) {
        throw new InvalidToken();
      }

      const authData = tokenGenerator.getData(token);

      if (!authData.id) {
        throw new InvalidAuthenticatorData();
      }

      if (!day || !startTime || !endTime || !bandId) {
        throw new InvalidInfos();
      }

      const dayUpperCase = day.toUpperCase();

      if (
        dayUpperCase !== "SEXTA" &&
        dayUpperCase !== "SABADO" &&
        dayUpperCase !== "DOMINGO"
      ) {
        throw new InvalidDay();
      }

      if (startTime < 8 || startTime > 23 || startTime > endTime) {
        throw new InvalidStartTime();
      }

      if (endTime < 9 || endTime > 23 || endTime < startTime) {
        throw new InvalidEndTime();
      }

      if (!Number.isInteger(startTime) || !Number.isInteger(endTime)) {
        throw new InvalidTime();
      }

      const timeline = await showDatabase.findTimeline(day);

      for (let i = 0; i < timeline.length; i++) {
        if (
          (timeline[i].week_day === day &&
            timeline[i].start_time === startTime) ||
          (timeline[i].week_day === day && timeline[i].end_time === endTime)
        ) {
          throw new FullSchedule();
        }
      }

      const id = IdGenerator();

      const newShow: Show = {
        id,
        day,
        startTime,
        endTime,
        bandId,
      };

      await showDatabase.createShow(newShow);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public async getShows(day: string, token: string) {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const authData = tokenGenerator.getData(token);

      if (!authData.id) {
        throw new InvalidAuthenticatorData();
      }

      const dayUpperCase = day.toUpperCase();

      if (
        dayUpperCase !== "SEXTA" &&
        dayUpperCase !== "SÁBADO" &&
        dayUpperCase !== "DOMINGO"
      ) {
        throw new InvalidDay();
      }

      const result = await showDatabase.getShows(day);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}