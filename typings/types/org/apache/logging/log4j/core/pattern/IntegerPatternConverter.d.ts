import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/AbstractPatternConverter.d.ts'
import type { ArrayPatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/ArrayPatternConverter.d.ts'
export class IntegerPatternConverter extends AbstractPatternConverter implements ArrayPatternConverter {
    static CATEGORY: string;
    static newInstance(paramoptions: string[]): IntegerPatternConverter;
    private constructor()
    format(toAppendTo: StringBuilder, ...objects: Object[]): void;
    format(obj: Object, toAppendTo: StringBuilder): void;
}