import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStyleNameConverter } from '../../../../../../org/apache/logging/log4j/core/pattern/AbstractStyleNameConverter.d.ts'
import type { PatternFormatter } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class AbstractStyleNameConverter$Green extends AbstractStyleNameConverter {
    static CATEGORY: string;
    static newInstance(paramconfig: Configuration, paramoptions: (Object | null)[]): AbstractStyleNameConverter$Green;
    constructor(formatters: PatternFormatter[], styling: string)
}