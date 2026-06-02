import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ToDisplayStringFormat extends Object {
    static getDefaultFormat(): ToDisplayStringFormat;
    private constructor(maxDepth: number, maxElements: number, quoteString: boolean, includeArrayLength: boolean)
    // private includeArrayLength: boolean;
    readonly maxDepth: number;
    readonly maxElements: number;
    // private quoteString: boolean;
    getMaxDepth(): number;
    getMaxElements(): number;
    includeArrayLength(): boolean;
    quoteString(): boolean;
    withQuoteString(quote: boolean): ToDisplayStringFormat;
}