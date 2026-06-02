import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CollationRootElements extends Object {
    static IX_FIRST_TERTIARY_INDEX: number;
    static PRIMARY_SENTINEL: number;
    static PRIMARY_STEP_MASK: number;
    static SEC_TER_DELTA_FLAG: number;
    constructor(arg0: number[])
    // private elements: number[];
    // private findP(arg0: number): number;
    findPrimary(arg0: number): number;
    firstCEWithPrimaryAtLeast(arg0: number): number;
    getFirstPrimary(): number;
    getFirstPrimaryCE(): number;
    // private getFirstSecTerForPrimary(arg0: number): number;
    getFirstSecondaryCE(): number;
    getFirstTertiaryCE(): number;
    getLastCommonSecondary(): number;
    getLastSecondaryCE(): number;
    getLastTertiaryCE(): number;
    getPrimaryAfter(arg0: number, arg1: number, arg2: boolean): number;
    getPrimaryBefore(arg0: number, arg1: boolean): number;
    getSecondaryAfter(arg0: number, arg1: number): number;
    getSecondaryBefore(arg0: number, arg1: number): number;
    getSecondaryBoundary(): number;
    getTertiaryAfter(arg0: number, arg1: number, arg2: number): number;
    getTertiaryBefore(arg0: number, arg1: number, arg2: number): number;
    getTertiaryBoundary(): number;
    lastCEWithPrimaryBefore(arg0: number): number;
}