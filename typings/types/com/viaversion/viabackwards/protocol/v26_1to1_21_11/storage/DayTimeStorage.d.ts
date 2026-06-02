import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DayTimeStorage extends Object implements StorableObject {
    constructor()
    readonly advanceTime: boolean;
    readonly dayTime: number;
    readonly gameTime: number;
    advanceTime(): boolean;
    dayTime(): number;
    gameTime(): number;
    onRemove(): void;
    setAdvanceTime(arg0: boolean): void;
    setDayTime(arg0: number): void;
    setGameTime(arg0: number): void;
    setGameTimeAndUpdateDayTime(arg0: number): number;
}