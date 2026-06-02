import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class NumberRangeInput$Range extends Object {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    readonly end: number;
    readonly initial: number;
    readonly start: number;
    readonly step: number;
    equals(arg0: Object | null): boolean;
    getEnd(): number;
    getInitial(): number;
    getStart(): number;
    getStep(): number;
    hashCode(): number;
    toString(): string;
}