import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserStructure } from '../../../../../kotlinx/datetime/internal/format/parser/ParserStructure.d.ts'
export class Parser$ParserState<Output extends Object | number | string | boolean> extends Object {
    constructor(output: Output, parserStructure: ParserStructure<Output>, inputPosition: number)
    readonly inputPosition: number;
    readonly output: Output;
    readonly parserStructure: ParserStructure<Output>;
}