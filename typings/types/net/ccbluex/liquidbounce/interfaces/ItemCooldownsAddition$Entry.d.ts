import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ItemCooldownsAddition$Entry extends Record {
    constructor(currentTick: number, startTick: number, endTick: number)
    // private currentTick: number;
    // private endTick: number;
    // private startTick: number;
    currentTick(): number;
    endTick(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    startTick(): number;
    toString(): string;
}