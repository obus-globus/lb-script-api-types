import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LSR extends Object {
    static DEBUG_OUTPUT: boolean;
    static DONT_CARE_FLAGS: number;
    static EXPLICIT_LANGUAGE: number;
    static EXPLICIT_LSR: number;
    static EXPLICIT_REGION: number;
    static EXPLICIT_SCRIPT: number;
    static IMPLICIT_LSR: number;
    static REGION_INDEX_LIMIT: number;
    static decodeInts(paramarg0: number[], paramarg1: string[]): LSR[];
    static indexForRegion(paramarg0: string): number;
    constructor(arg0: string, arg1: string, arg2: string, arg3: number)
    flags: number;
    language: string;
    region: string;
    // private regionIndex: number;
    script: string;
    // private encodeLanguageToInt(): number;
    // private encodeRegionToInt(arg0: string[]): number;
    // private encodeScriptToInt(): number;
    encodeToIntForResource(arg0: string[]): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    isEquivalentTo(arg0: LSR): boolean;
    toString(): string;
}