import type { JavaMap } from '../../JavaMap.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Locale$LanguageRange extends Object {
    static MAX_WEIGHT: number;
    static MIN_WEIGHT: number;
    static mapEquivalents(paramarg0: Locale$LanguageRange[], paramarg1: JavaMap<string, string[]>): Locale$LanguageRange[];
    static parse(paramarg0: string): Locale$LanguageRange[];
    static parse(paramarg0: string, paramarg1: JavaMap<string, string[]>): Locale$LanguageRange[];
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    // private hash: number;
    readonly range: string;
    readonly weight: number;
    equals(arg0: Object | null): boolean;
    getRange(): string;
    getWeight(): number;
    hashCode(): number;
    toString(): string;
}