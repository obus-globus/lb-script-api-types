import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { AbstractStringLayout } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
import type { GelfLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout$Builder.d.ts'
import type { GelfLayout$CompressionType } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout$CompressionType.d.ts'
import type { GelfLayout$FieldWriter } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout$FieldWriter.d.ts'
import type { PatternLayout } from '../../../../../../org/apache/logging/log4j/core/layout/PatternLayout.d.ts'
import type { ListChecker } from '../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class GelfLayout extends AbstractStringLayout {
    static ELEMENT_TYPE: string;
    static createLayout(paramhost: string, paramadditionalFields: KeyValuePair[], paramcompressionType: GelfLayout$CompressionType, paramcompressionThreshold: number, paramincludeStacktrace: boolean): GelfLayout;
    static newBuilder<B extends GelfLayout$Builder<B>>(): B;
    constructor(host: string, additionalFields: KeyValuePair[], compressionType: GelfLayout$CompressionType, compressionThreshold: number, includeStacktrace: boolean)
    constructor(arg0: Configuration, arg1: string, arg2: KeyValuePair[], arg3: GelfLayout$CompressionType, arg4: number, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: ListChecker, arg12: ListChecker, arg13: PatternLayout, arg14: string, arg15: string, arg16: any)
    // private additionalFields: KeyValuePair[];
    // private compressionThreshold: number;
    // private compressionType: GelfLayout$CompressionType;
    // private host: string;
    // private includeMapMessage: boolean;
    // private includeNewLineDelimiter: boolean;
    // private includeNullDelimiter: boolean;
    // private includeStacktrace: boolean;
    // private includeThreadContext: boolean;
    // private layout: PatternLayout;
    // private mapWriter: GelfLayout$FieldWriter;
    // private mdcWriter: GelfLayout$FieldWriter;
    // private omitEmptyFields: boolean;
    // private compress(bytes: number[]): number[];
    encode(event: LogEvent, destination: ByteBufferDestination): void;
    // private formatLevel(level: Level): number;
    getContentFormat(): { [key: string]: string };
    getContentType(): string;
    requiresLocation(): boolean;
    toByteArray(event: LogEvent): number[];
    toSerializable(event: LogEvent): string;
    toString(): string;
    // private toText(event: LogEvent, builder: StringBuilder, gcFree: boolean): StringBuilder;
}