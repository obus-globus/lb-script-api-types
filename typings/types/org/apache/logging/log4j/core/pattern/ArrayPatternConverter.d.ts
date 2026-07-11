import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternConverter.d.ts'
export interface ArrayPatternConverter extends Object, PatternConverter{
    format(toAppendTo: StringBuilder, ...objects: Object[]): void;
    getName(): string;
    getStyleClass(e: Object): string;
}