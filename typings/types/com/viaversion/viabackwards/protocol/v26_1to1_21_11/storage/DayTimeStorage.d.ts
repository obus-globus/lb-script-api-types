import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DayTimeStorage extends Object {
    constructor()
    advanceTime(): boolean;
    dayTime(): number;
    gameTime(): number;
    setAdvanceTime(arg0: boolean): void;
    setDayTime(arg0: number): void;
    setGameTime(arg0: number): void;
    setGameTimeAndUpdateDayTime(arg0: number): number;
}