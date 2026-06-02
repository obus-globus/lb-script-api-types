import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CollationData } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/CollationData.d.ts'
import type { SharedObject } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/coll/SharedObject.d.ts'
export class CollationSettings extends SharedObject {
    static BACKWARD_SECONDARY: number;
    static CASE_FIRST: number;
    static CASE_FIRST_AND_UPPER_MASK: number;
    static CASE_LEVEL: number;
    static CHECK_FCD: number;
    static NUMERIC: number;
    constructor()
    fastLatinOptions: number;
    fastLatinPrimaries: string[];
    // private minHighNoReorder: number;
    options: number;
    reorderCodes: number[];
    // private reorderRanges: number[];
    reorderTable: number[];
    variableTop: number;
    aliasReordering(data: CollationData, codesAndRanges: number[], codesLength: number, table: number[]): void;
    clone(): CollationSettings;
    copyReorderingFrom(other: CollationSettings): void;
    dontCheckFCD(): boolean;
    equals(other: Object | null): boolean;
    getAlternateHandling(): boolean;
    getCaseFirst(): number;
    getFlag(bit: number): boolean;
    getMaxVariable(): number;
    getStrength(): number;
    hasBackwardSecondary(): boolean;
    hasReordering(): boolean;
    hashCode(): number;
    isNumeric(): boolean;
    reorder(p: number): number;
    // private reorderEx(p: number): number;
    resetReordering(): void;
    setAlternateHandlingDefault(defaultOptions: number): void;
    setAlternateHandlingShifted(value: boolean): void;
    setCaseFirst(value: number): void;
    setCaseFirstDefault(defaultOptions: number): void;
    setFlag(bit: number, value: boolean): void;
    setFlagDefault(bit: number, defaultOptions: number): void;
    setMaxVariable(value: number, defaultOptions: number): void;
    // private setReorderArrays(codes: number[], ranges: number[], rangesStart: number, rangesLength: number, table: number[]): void;
    // private setReorderRanges(ranges: number[], rangesStart: number, rangesLength: number): void;
    setReordering(data: CollationData, codes: number[]): void;
    setStrength(value: number): void;
    setStrengthDefault(defaultOptions: number): void;
}