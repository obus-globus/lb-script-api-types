import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StrLookup } from '../../../../../../org/apache/logging/log4j/core/lookup/StrLookup.d.ts'
import type { StrMatcher } from '../../../../../../org/apache/logging/log4j/core/lookup/StrMatcher.d.ts'
import type { StrSubstitutor } from '../../../../../../org/apache/logging/log4j/core/lookup/StrSubstitutor.d.ts'
export class ConfigurationStrSubstitutor extends StrSubstitutor {
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
    constructor(lookup: StrLookup)
    constructor(other: StrSubstitutor)
    toString(): string;
}