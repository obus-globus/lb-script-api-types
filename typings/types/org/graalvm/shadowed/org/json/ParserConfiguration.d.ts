import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ParserConfiguration extends Object {
    static DEFAULT_MAXIMUM_NESTING_DEPTH: number;
    static UNDEFINED_MAXIMUM_NESTING_DEPTH: number;
    constructor()
    constructor(keepStrings: boolean, maxNestingDepth: number)
    keepStrings: boolean;
    maxNestingDepth: number;
    clone(): ParserConfiguration;
    getMaxNestingDepth(): number;
    isKeepStrings(): boolean;
    withKeepStrings<T extends ParserConfiguration>(newVal: boolean): T;
    withMaxNestingDepth<T extends ParserConfiguration>(maxNestingDepth: number): T;
}