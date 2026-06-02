import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternConverter.d.ts'
export abstract class AbstractPatternConverter extends Object implements PatternConverter {
    static CATEGORY: string;
    constructor(name: string, style: string)
    readonly name: string;
    // private style: string;
    getName(): string;
    getStyleClass(e: Object): string;
}