import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { StrBuilder } from '../../../../../org/apache/commons/lang3/text/StrBuilder.d.ts'
import type { StrLookup } from '../../../../../org/apache/commons/lang3/text/StrLookup.d.ts'
import type { StrMatcher } from '../../../../../org/apache/commons/lang3/text/StrMatcher.d.ts'
export class StrSubstitutor extends Object {
    static DEFAULT_ESCAPE: string;
    static DEFAULT_PREFIX: StrMatcher;
    static DEFAULT_SUFFIX: StrMatcher;
    static DEFAULT_VALUE_DELIMITER: StrMatcher;
    static replace<V extends unknown>(paramarg0: Object, paramarg1: JavaMap<string, V>): string;
    static replace<V extends unknown>(paramarg0: Object, paramarg1: JavaMap<string, V>, paramarg2: string, paramarg3: string): string;
    static replace(paramarg0: Object, paramarg1: JavaMap<any, any>): string;
    static replaceSystemProperties(paramarg0: Object): string;
    constructor()
    constructor(arg0: JavaMap<string, Object>)
    constructor(arg0: JavaMap<string, Object>, arg1: string, arg2: string)
    constructor(arg0: JavaMap<string, Object>, arg1: string, arg2: string, arg3: string)
    constructor(arg0: JavaMap<string, Object>, arg1: string, arg2: string, arg3: string, arg4: string)
    constructor(arg0: StrLookup<Object>)
    constructor(arg0: StrLookup<Object>, arg1: string, arg2: string, arg3: string)
    constructor(arg0: StrLookup<Object>, arg1: string, arg2: string, arg3: string, arg4: string)
    constructor(arg0: StrLookup<Object>, arg1: StrMatcher, arg2: StrMatcher, arg3: string)
    constructor(arg0: StrLookup<Object>, arg1: StrMatcher, arg2: StrMatcher, arg3: string, arg4: StrMatcher)
    readonly enableSubstitutionInVariables: boolean;
    readonly escapeChar: string;
    // private prefixMatcher: StrMatcher;
    readonly preserveEscapes: boolean;
    // private suffixMatcher: StrMatcher;
    readonly valueDelimiterMatcher: StrMatcher;
    readonly variableResolver: StrLookup<Object>;
    // private checkCyclicSubstitution(arg0: string, arg1: string[]): void;
    getEscapeChar(): string;
    getValueDelimiterMatcher(): StrMatcher;
    getVariablePrefixMatcher(): StrMatcher;
    getVariableResolver(): StrLookup<Object>;
    getVariableSuffixMatcher(): StrMatcher;
    isEnableSubstitutionInVariables(): boolean;
    isPreserveEscapes(): boolean;
    replace(arg0: StringBuffer): string;
    replace(arg0: StringBuffer, arg1: number, arg2: number): string;
    replace(arg0: Object): string;
    replace(arg0: string[]): string;
    replace(arg0: string[], arg1: number, arg2: number): string;
    replace(arg0: CharSequence): string;
    replace(arg0: CharSequence, arg1: number, arg2: number): string;
    replace(arg0: string): string;
    replace(arg0: string, arg1: number, arg2: number): string;
    replace(arg0: StrBuilder): string;
    replace(arg0: StrBuilder, arg1: number, arg2: number): string;
    replaceIn(arg0: StringBuffer): boolean;
    replaceIn(arg0: StringBuffer, arg1: number, arg2: number): boolean;
    replaceIn(arg0: StringBuilder): boolean;
    replaceIn(arg0: StringBuilder, arg1: number, arg2: number): boolean;
    replaceIn(arg0: StrBuilder): boolean;
    replaceIn(arg0: StrBuilder, arg1: number, arg2: number): boolean;
    resolveVariable(arg0: string, arg1: StrBuilder, arg2: number, arg3: number): string;
    setEnableSubstitutionInVariables(arg0: boolean): void;
    setEscapeChar(arg0: string): void;
    setPreserveEscapes(arg0: boolean): void;
    setValueDelimiter(arg0: string): StrSubstitutor;
    setValueDelimiterMatcher(arg0: StrMatcher): StrSubstitutor;
    setVariablePrefix(arg0: string): StrSubstitutor;
    setVariablePrefixMatcher(arg0: StrMatcher): StrSubstitutor;
    setVariableResolver(arg0: StrLookup<Object>): void;
    setVariableSuffix(arg0: string): StrSubstitutor;
    setVariableSuffixMatcher(arg0: StrMatcher): StrSubstitutor;
    substitute(arg0: StrBuilder, arg1: number, arg2: number): boolean;
    // private substitute(arg0: StrBuilder, arg1: number, arg2: number, arg3: string[]): number;
}