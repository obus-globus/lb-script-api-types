import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StrongholdHypothesis extends Object {
//     static box-impl(paramarg0: number[]): StrongholdHypothesis;
 // ; invalid because of -//     static constructor-impl(paramarg0: number[]): number[];
 // ; invalid because of -//     static equals-impl(paramarg0: number[], paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: number[], paramarg1: number[]): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: number[]): number;
 // ; invalid because of -//     static toString-impl(paramarg0: number[]): string;
 // ; invalid because of -    constructor(chunks: number[])
    readonly chunks: number[];
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}