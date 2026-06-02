import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
export abstract class ExtendedParser extends Parser {
    static EOF: number;
    constructor(arg0: TokenStream)
}