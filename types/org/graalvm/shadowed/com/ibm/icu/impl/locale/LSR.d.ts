import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class LSR extends Object {
    static DEBUG_OUTPUT: boolean;
    static DONT_CARE_FLAGS: number;
    static EXPLICIT_LANGUAGE: number;
    static EXPLICIT_LSR: number;
    static EXPLICIT_REGION: number;
    static EXPLICIT_SCRIPT: number;
    static IMPLICIT_LSR: number;
    static REGION_INDEX_LIMIT: number;
    static decodeInts(paramnums: number[], paramm49: (Object | null)[]): (Object | null)[];
    static indexForRegion(paramregion: string): number;
    constructor(language: string, script: string, region: string, flags: number)
    flags: number;
    language: string;
    region: string;
    // private regionIndex: number;
    script: string;
    // private encodeLanguageToInt(): number;
    // private encodeRegionToInt(m49: string[]): number;
    // private encodeScriptToInt(): number;
    encodeToIntForResource(m49: string[]): number;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isEquivalentTo(other: LSR): boolean;
    toString(): string;
}