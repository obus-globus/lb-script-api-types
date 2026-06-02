import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AssignableField } from '../../../../../kotlinx/datetime/internal/format/parser/AssignableField.d.ts'
import type { ParseResult } from '../../../../../kotlinx/datetime/internal/format/parser/ParseResult.d.ts'
import type { ParserOperation } from '../../../../../kotlinx/datetime/internal/format/parser/ParserOperation.d.ts'
import type { TimeZoneParserOperation$Companion } from '../../../../../kotlinx/datetime/internal/format/parser/TimeZoneParserOperation$Companion.d.ts'
export class TimeZoneParserOperation<Output extends Object | number | string | boolean> extends Object implements ParserOperation<Output> {
    static Companion: TimeZoneParserOperation$Companion;
    constructor(setter: AssignableField<Output, string>)
    // private setter: AssignableField<Output, string>;
    consume(storage: Output, input: CharSequence, startIndex: number): ParseResult;
}