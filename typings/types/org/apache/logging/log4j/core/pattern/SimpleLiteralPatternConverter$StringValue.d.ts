import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { SimpleLiteralPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/SimpleLiteralPatternConverter.d.ts'
export class SimpleLiteralPatternConverter$StringValue extends SimpleLiteralPatternConverter {
    static CATEGORY: string;
    constructor(literal: string)
    // private literal: string;
    format(output: StringBuilder): void;
}