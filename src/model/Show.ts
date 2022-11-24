export type Show = {
    id: string, 
    day: FestivalDays,
    startTime:number;
    endTime: number;
    bandId:string;
}

export enum FestivalDays{
    FRI = "SEXTA",
    SAT = "SÁBADO",
    SUN = "DOMINGO"
}

export interface ShowDTO {
    day: FestivalDays;
    startTime: number;
    endTime: number;
    bandId: string;
}

export interface ShowRepository {
    createShow(show: Show): Promise<void>;
    findTimelineByDay(day : string): Promise<[]>;
    getShows(day: string): Promise<[]>;
  }