import { BaseDatabase } from "./BaseDatabase";
import { FestivalDays, Show } from "../model/Show";

// método para criar o show
export class ShowDataBase extends BaseDatabase {
  findTimelineByDay(day: FestivalDays) {
    throw new Error("Method not implemented.");
  }
  public async createShow(show: Show) {
    await BaseDatabase.connection("LAMA_TABELA_SHOWS").insert({
      id: show.id,
      week_day: show.day,
      start_time: show.startTime,
      end_time: show.bandId,
    });
  }
// método para verificar agenda de shows
  public async findTimeline(day: string) {
    const result = await BaseDatabase.connection("LAMA_TABELA_SHOWS")
      .select()
      .where({ week_day: day });

    return result;
  }
// método para pegar os shows de determinado dia
  public async getShows(day: string) {
    const result = await BaseDatabase.connection.raw(`
      SELECT B.name, B.music_genre
      FROM LAMA_TABELA_BANDAS as B
      JOIN LAMA_TABELA_SHOWS as S
      on B.id  =  S.band_id
      WHERE week_day = "${day}"
      ORDER BY S.start_time DESC
  `);
    return result[0];
  }
}
