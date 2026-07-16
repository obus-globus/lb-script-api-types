import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ThrowablePatternConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/ThrowablePatternConverter.d.ts'
export class ExtendedThrowablePatternConverter extends ThrowablePatternConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: string[]): ExtendedThrowablePatternConverter;
    static newInstance(paramconfig: Configuration, paramoptions: string[]): ThrowablePatternConverter;
    private constructor(config: Configuration, options: string[])
}