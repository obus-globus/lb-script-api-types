import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { LocationAware } from '../../../../../../org/apache/logging/log4j/core/impl/LocationAware.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { RegexReplacement } from '../../../../../../org/apache/logging/log4j/core/pattern/RegexReplacement.d.ts'
export class PatternLayout$PatternSelectorSerializer extends Object implements LocationAware, AbstractStringLayout$Serializer {
    private constructor(patternSelector: PatternSelector, replace: RegexReplacement)
    // private patternSelector: PatternSelector;
    // private replace: RegexReplacement;
    requiresLocation(): boolean;
    toSerializable(event: LogEvent, builder: StringBuilder): StringBuilder;
    toSerializable(event: LogEvent): string;
    toSerializable(event: LogEvent, buffer: StringBuilder): StringBuilder;
    toString(): string;
}