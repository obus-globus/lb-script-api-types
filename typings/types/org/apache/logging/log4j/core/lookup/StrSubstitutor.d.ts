import type { StringBuffer } from '../../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Configuration } from '../../../../../../org/apache/logging/log4j/core/config/Configuration.d.ts'
import type { ConfigurationAware } from '../../../../../../org/apache/logging/log4j/core/config/ConfigurationAware.d.ts'
import type { LookupResult } from '../../../../../../org/apache/logging/log4j/core/lookup/LookupResult.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
import type { StrMatcher } from '../../../../../../org/apache/logging/log4j/core/lookup/StrMatcher.d.ts'
export class StrSubstitutor extends Object implements ConfigurationAware {
    static DEFAULT_ESCAPE: string;
    static DEFAULT_PREFIX: StrMatcher;
    static DEFAULT_SUFFIX: StrMatcher;
    static DEFAULT_VALUE_DELIMITER: StrMatcher;
    static DEFAULT_VALUE_DELIMITER_STRING: string;
    static DEFAULT_VALUE_ESCAPE_DELIMITER: StrMatcher;
    static ESCAPE_DELIMITER_STRING: string;
    static replace(paramsource: Object, paramvalueMap: { [key: string]: string }): string;
    static replace(paramsource: Object, paramvalueMap: { [key: string]: string }, paramprefix: string, paramsuffix: string): string;
    static replace(paramsource: Object, paramvalueProperties: { [key: string]: any }): string;
    constructor()
    constructor(properties: { [key: string]: any })
    constructor(valueMap: { [key: string]: string })
    constructor(valueMap: { [key: string]: string }, prefix: string, suffix: string)
    constructor(valueMap: { [key: string]: string }, prefix: string, suffix: string, escape: string)
    constructor(valueMap: { [key: string]: string }, prefix: string, suffix: string, escape: string, valueDelimiter: string)
    constructor(variableResolver: StrLookup)
    constructor(variableResolver: StrLookup, prefix: string, suffix: string, escape: string)
    constructor(variableResolver: StrLookup, prefix: string, suffix: string, escape: string, valueDelimiter: string)
    constructor(variableResolver: StrLookup, prefixMatcher: StrMatcher, suffixMatcher: StrMatcher, escape: string)
    constructor(variableResolver: StrLookup, prefixMatcher: StrMatcher, suffixMatcher: StrMatcher, escape: string, valueDelimiterMatcher: StrMatcher)
    constructor(variableResolver: StrLookup, prefixMatcher: StrMatcher, suffixMatcher: StrMatcher, escape: string, valueDelimiterMatcher: StrMatcher, valueEscapeMatcher: StrMatcher)
    constructor(other: StrSubstitutor)
    readonly configuration: Configuration;
    readonly enableSubstitutionInVariables: boolean;
    readonly escapeChar: string;
    // private prefixMatcher: StrMatcher;
    // private suffixMatcher: StrMatcher;
    readonly valueDelimiterMatcher: StrMatcher;
    // private valueDelimiterString: string;
    // private valueEscapeDelimiterMatcher: StrMatcher;
    readonly variableResolver: StrLookup;
    appendWithSeparators(sb: StringBuilder, iterable: (Object | null)[], separator: string): void;
    // private getChars(sb: StringBuilder): string[];
    getEscapeChar(): string;
    getValueDelimiterMatcher(): StrMatcher;
    getVariablePrefixMatcher(): StrMatcher;
    getVariableResolver(): StrLookup;
    getVariableSuffixMatcher(): StrMatcher;
    // private isCyclicSubstitution(varName: string, priorVariables: string[]): boolean;
    isEnableSubstitutionInVariables(): boolean;
    replace(source: StringBuffer): string;
    replace(source: StringBuffer, offset: number, length: number): string;
    replace(source: StringBuilder): string;
    replace(source: StringBuilder, offset: number, length: number): string;
    replace(source: Object): string;
    replace(source: string[]): string;
    replace(source: string[], offset: number, length: number): string;
    replace(source: string): string;
    replace(source: string, offset: number, length: number): string;
    replace(event: LogEvent, source: StringBuffer): string;
    replace(event: LogEvent, source: StringBuffer, offset: number, length: number): string;
    replace(event: LogEvent, source: StringBuilder): string;
    replace(event: LogEvent, source: StringBuilder, offset: number, length: number): string;
    replace(event: LogEvent, source: Object): string;
    replace(event: LogEvent, source: string[]): string;
    replace(event: LogEvent, source: string[], offset: number, length: number): string;
    replace(event: LogEvent, source: string): string;
    replace(event: LogEvent, source: string, offset: number, length: number): string;
    replaceIn(source: StringBuffer): boolean;
    replaceIn(source: StringBuffer, offset: number, length: number): boolean;
    replaceIn(source: StringBuilder): boolean;
    replaceIn(source: StringBuilder, offset: number, length: number): boolean;
    replaceIn(event: LogEvent, source: StringBuffer, offset: number, length: number): boolean;
    replaceIn(event: LogEvent, source: StringBuilder): boolean;
    replaceIn(event: LogEvent, source: StringBuilder, offset: number, length: number): boolean;
    resolveVariable(event: LogEvent, variableName: string, buf: StringBuilder, startPos: number, endPos: number): LookupResult;
    setConfiguration(configuration: Configuration): void;
    setEnableSubstitutionInVariables(enableSubstitutionInVariables: boolean): void;
    setEscapeChar(escapeCharacter: string): void;
    setValueDelimiter(valueDelimiter: string): StrSubstitutor;
    setValueDelimiterMatcher(valueDelimiterMatcher: StrMatcher): StrSubstitutor;
    setVariablePrefix(prefix: string): StrSubstitutor;
    setVariablePrefixMatcher(prefixMatcher: StrMatcher): StrSubstitutor;
    setVariableResolver(variableResolver: StrLookup): void;
    setVariableSuffix(suffix: string): StrSubstitutor;
    setVariableSuffixMatcher(suffixMatcher: StrMatcher): StrSubstitutor;
    substitute(event: LogEvent, buf: StringBuilder, offset: number, length: number): boolean;
    // private substitute(event: LogEvent, buf: StringBuilder, offset: number, length: number, priorVariables: string[]): number;
    toString(): string;
}