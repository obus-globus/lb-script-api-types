import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ItemCooldowns$CooldownInstance extends Record {
    constructor(startTime: number, endTime: number)
    // private endTime: number;
    // private startTime: number;
    endTime(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    startTime(): number;
    toString(): string;
}