import type { PatternLayout$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStringLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
import type { AbstractStringLayout$Serializer } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer.d.ts'
import type { AbstractStringLayout$Serializer2 } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Serializer2.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
import type { PatternLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout$Builder.d.ts'
import type { PatternLayout$SerializerBuilder } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout$SerializerBuilder.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { PatternParser } from '../../../../../../org/apache/logging/log4j/core/pattern/PatternParser.d.ts'
import type { RegexReplacement } from '../../../../../../org/apache/logging/log4j/core/pattern/RegexReplacement.d.ts'
export class PatternLayout extends AbstractStringLayout {
    static DEFAULT_CONVERSION_PATTERN: string;
    static ELEMENT_TYPE: string;
    static KEY: string;
    static SIMPLE_CONVERSION_PATTERN: string;
    static TTCC_CONVERSION_PATTERN: string;
    static createDefaultLayout(): PatternLayout;
    static createDefaultLayout(paramconfiguration: Configuration): PatternLayout;
    static createLayout(parampattern: string, parampatternSelector: PatternSelector, paramconfig: Configuration, paramreplace: RegexReplacement, paramcharset: Charset, paramalwaysWriteExceptions: boolean, paramnoConsoleNoAnsi: boolean, paramheaderPattern: string, paramfooterPattern: string): PatternLayout;
    static createPatternParser(paramconfig: Configuration): PatternParser;
    static createSerializer(paramconfiguration: Configuration, paramreplace: RegexReplacement, parampattern: string, paramdefaultPattern: string, parampatternSelector: PatternSelector, paramalwaysWriteExceptions: boolean, paramnoConsoleNoAnsi: boolean): AbstractStringLayout$Serializer;
    static newBuilder(): PatternLayout$Builder;
    static newSerializerBuilder(): PatternLayout$SerializerBuilder;
    private constructor(config: Configuration, replace: RegexReplacement, eventPattern: string, patternSelector: PatternSelector, charset: Charset, alwaysWriteExceptions: boolean, disableAnsi: boolean, noConsoleNoAnsi: boolean, headerPattern: string, footerPattern: string)
    constructor(arg0: Configuration, arg1: RegexReplacement, arg2: string, arg3: PatternSelector, arg4: Charset, arg5: boolean, arg6: boolean, arg7: boolean, arg8: string, arg9: string, arg10: PatternLayout$1)
    readonly conversionPattern: string;
    readonly eventSerializer: AbstractStringLayout$Serializer;
    // private patternSelector: PatternSelector;
    encode(event: LogEvent, destination: ByteBufferDestination): void;
    getContentFormat(): { [key: string]: string };
    getConversionPattern(): string;
    getEventSerializer(): AbstractStringLayout$Serializer;
    requiresLocation(): boolean;
    serialize(event: LogEvent, stringBuilder: StringBuilder): void;
    toSerializable(event: LogEvent): string;
    toString(): string;
    // private toText(serializer: AbstractStringLayout$Serializer2, event: LogEvent, destination: StringBuilder): StringBuilder;
}