import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class TimeZoneRule extends Object implements Serializable {
    constructor(name: string, rawOffset: number, dstSavings: number)
    // private dstSavings: number;
    readonly name: string;
    readonly rawOffset: number;
    getDSTSavings(): number;
    getFinalStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getFirstStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getName(): string;
    getNextStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getPreviousStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getRawOffset(): number;
    isEquivalentTo(other: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}