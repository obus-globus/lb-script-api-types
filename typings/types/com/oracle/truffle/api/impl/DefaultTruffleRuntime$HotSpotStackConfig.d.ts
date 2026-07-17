import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultTruffleRuntime$HotSpotStackConfig extends Record {
    constructor(redZoneSize: number, yellowZoneSize: number, reservedZoneSize: number, shadowZoneSize: number, transitionSafetyMargin: number, pageSize: number)
    // private pageSize: number;
    // private redZoneSize: number;
    // private reservedZoneSize: number;
    // private shadowZoneSize: number;
    // private transitionSafetyMargin: number;
    // private yellowZoneSize: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pageSize(): number;
    redZoneSize(): number;
    reservedZoneSize(): number;
    shadowZoneSize(): number;
    toString(): string;
    transitionSafetyMargin(): number;
    yellowZoneSize(): number;
}