import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternConverter.d.ts'
export abstract class AbstractPatternConverter extends Object implements PatternConverter {
    static CATEGORY: string;
    constructor(name: string, style: string)
    readonly name: string;
    // private style: string;
    format(obj: Object, toAppendTo: StringBuilder): void;
    getName(): string;
    getStyleClass(e: Object): string;
}