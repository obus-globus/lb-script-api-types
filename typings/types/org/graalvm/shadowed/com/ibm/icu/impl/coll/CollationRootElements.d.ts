import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class CollationRootElements extends Object {
    static IX_FIRST_TERTIARY_INDEX: number;
    static PRIMARY_SENTINEL: number;
    static PRIMARY_STEP_MASK: number;
    static SEC_TER_DELTA_FLAG: number;
    constructor(rootElements: number[])
    // private elements: number[];
    // private findP(p: number): number;
    findPrimary(p: number): number;
    firstCEWithPrimaryAtLeast(p: number): number;
    getFirstPrimary(): number;
    getFirstPrimaryCE(): number;
    // private getFirstSecTerForPrimary(index: number): number;
    getFirstSecondaryCE(): number;
    getFirstTertiaryCE(): number;
    getLastCommonSecondary(): number;
    getLastSecondaryCE(): number;
    getLastTertiaryCE(): number;
    getPrimaryAfter(p: number, index: number, isCompressible: boolean): number;
    getPrimaryBefore(p: number, isCompressible: boolean): number;
    getSecondaryAfter(index: number, s: number): number;
    getSecondaryBefore(p: number, s: number): number;
    getSecondaryBoundary(): number;
    getTertiaryAfter(index: number, s: number, t: number): number;
    getTertiaryBefore(p: number, s: number, t: number): number;
    getTertiaryBoundary(): number;
    lastCEWithPrimaryBefore(p: number): number;
}