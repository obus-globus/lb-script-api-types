import type { AbstractStringLayout$Builder } from '../../../../../../org/apache/logging/log4j/core/layout/AbstractStringLayout$Builder.d.ts'
import type { GelfLayout } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout.d.ts'
import type { GelfLayout$CompressionType } from '../../../../../../org/apache/logging/log4j/core/layout/GelfLayout$CompressionType.d.ts'
import type { PatternSelector } from '../../../../../../org/apache/logging/log4j/core/layout/PatternSelector.d.ts'
import type { ListChecker } from '../../../../../../org/apache/logging/log4j/core/layout/internal/ListChecker.d.ts'
import type { Builder } from '../../../../../../org/apache/logging/log4j/core/util/Builder.d.ts'
import type { KeyValuePair } from '../../../../../../org/apache/logging/log4j/core/util/KeyValuePair.d.ts'
export class GelfLayout$Builder<B extends GelfLayout$Builder<B>> extends AbstractStringLayout$Builder<B> implements Builder<GelfLayout> {
    constructor()
    readonly additionalFields: KeyValuePair[];
    readonly compressionThreshold: number;
    readonly compressionType: GelfLayout$CompressionType;
    readonly host: string;
    // private includeMapMessage: boolean;
    readonly includeNewLineDelimiter: boolean;
    readonly includeNullDelimiter: boolean;
    readonly includeStacktrace: boolean;
    readonly includeThreadContext: boolean;
    // private mapMessageExcludes: string;
    // private mapMessageIncludes: string;
    // private mapPrefix: string;
    // private messagePattern: string;
    // private omitEmptyFields: boolean;
    // private patternSelector: PatternSelector;
    // private threadContextExcludes: string;
    // private threadContextIncludes: string;
    // private threadContextPrefix: string;
    build(): GelfLayout;
    // private createChecker(excludes: string, includes: string): ListChecker;
    getAdditionalFields(): KeyValuePair[];
    getCompressionThreshold(): number;
    getCompressionType(): GelfLayout$CompressionType;
    getErrorPrefix(): string;
    getHost(): string;
    isIncludeNewLineDelimiter(): boolean;
    isIncludeNullDelimiter(): boolean;
    isIncludeStacktrace(): boolean;
    isIncludeThreadContext(): boolean;
    isValid(): boolean;
    setAdditionalFields(additionalFields: KeyValuePair[]): B;
    setCompressionThreshold(compressionThreshold: number): B;
    setCompressionType(compressionType: GelfLayout$CompressionType): B;
    setHost(host: string): B;
    setIncludeMapMessage(includeMapMessage: boolean): B;
    setIncludeNewLineDelimiter(includeNewLineDelimiter: boolean): B;
    setIncludeNullDelimiter(includeNullDelimiter: boolean): B;
    setIncludeStacktrace(includeStacktrace: boolean): B;
    setIncludeThreadContext(includeThreadContext: boolean): B;
    setMapMessageExcludes(mapMessageExcludes: string): B;
    setMapMessageIncludes(mapMessageIncludes: string): B;
    setMapPrefix(prefix: string): B;
    setMdcExcludes(mdcExcludes: string): B;
    setMdcIncludes(mdcIncludes: string): B;
    setMessagePattern(pattern: string): B;
    setOmitEmptyFields(omitEmptyFields: boolean): B;
    setPatternSelector(patternSelector: PatternSelector): B;
    setThreadContextExcludes(threadContextExcludes: string): B;
    setThreadContextIncludes(threadContextIncludes: string): B;
    setThreadContextPrefix(prefix: string): B;
}