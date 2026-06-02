import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class TimeZoneRule extends Object implements Serializable {
    constructor(arg0: string, arg1: number, arg2: number)
    // private dstSavings: number;
    readonly name: string;
    readonly rawOffset: number;
    getDSTSavings(): number;
    getFinalStart(arg0: number, arg1: number): Date;
    getFirstStart(arg0: number, arg1: number): Date;
    getName(): string;
    getNextStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getPreviousStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getRawOffset(): number;
    isEquivalentTo(arg0: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}