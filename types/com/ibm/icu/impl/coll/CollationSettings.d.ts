import type { CollationData } from '../../../../../com/ibm/icu/impl/coll/CollationData.d.ts'
import type { SharedObject } from '../../../../../com/ibm/icu/impl/coll/SharedObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
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
    aliasReordering(arg0: CollationData, arg1: number[], arg2: number, arg3: number[]): void;
    clone(): CollationSettings;
    copyReorderingFrom(arg0: CollationSettings): void;
    dontCheckFCD(): boolean;
    equals(arg0: Object | null): boolean;
    getAlternateHandling(): boolean;
    getCaseFirst(): number;
    getFlag(arg0: number): boolean;
    getMaxVariable(): number;
    getStrength(): number;
    hasBackwardSecondary(): boolean;
    hasReordering(): boolean;
    hashCode(): number;
    isNumeric(): boolean;
    reorder(arg0: number): number;
    // private reorderEx(arg0: number): number;
    resetReordering(): void;
    setAlternateHandlingDefault(arg0: number): void;
    setAlternateHandlingShifted(arg0: boolean): void;
    setCaseFirst(arg0: number): void;
    setCaseFirstDefault(arg0: number): void;
    setFlag(arg0: number, arg1: boolean): void;
    setFlagDefault(arg0: number, arg1: number): void;
    setMaxVariable(arg0: number, arg1: number): void;
    // private setReorderArrays(arg0: number[], arg1: number[], arg2: number, arg3: number, arg4: number[]): void;
    // private setReorderRanges(arg0: number[], arg1: number, arg2: number): void;
    setReordering(arg0: CollationData, arg1: number[]): void;
    setStrength(arg0: number): void;
    setStrengthDefault(arg0: number): void;
}