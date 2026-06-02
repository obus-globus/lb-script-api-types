import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClassDiscriminatorMode } from '../../../kotlinx/serialization/json/ClassDiscriminatorMode.d.ts'
import type { JsonNamingStrategy } from '../../../kotlinx/serialization/json/JsonNamingStrategy.d.ts'
export class JsonConfiguration extends Object {
    constructor(encodeDefaults: boolean, ignoreUnknownKeys: boolean, isLenient: boolean, allowStructuredMapKeys: boolean, prettyPrint: boolean, explicitNulls: boolean, prettyPrintIndent: string, coerceInputValues: boolean, useArrayPolymorphism: boolean, classDiscriminator: string, allowSpecialFloatingPointValues: boolean, useAlternativeNames: boolean, namingStrategy: JsonNamingStrategy | null, decodeEnumsCaseInsensitive: boolean, allowTrailingComma: boolean, allowComments: boolean, classDiscriminatorMode: ClassDiscriminatorMode)
    readonly allowComments: boolean;
    readonly allowSpecialFloatingPointValues: boolean;
    readonly allowStructuredMapKeys: boolean;
    readonly allowTrailingComma: boolean;
    readonly classDiscriminator: string;
    classDiscriminatorMode: ClassDiscriminatorMode;
    readonly coerceInputValues: boolean;
    readonly decodeEnumsCaseInsensitive: boolean;
    readonly encodeDefaults: boolean;
    readonly explicitNulls: boolean;
    readonly ignoreUnknownKeys: boolean;
    // private isLenient: boolean;
    /*not mapped: */ isLenient(): boolean;
    readonly namingStrategy: JsonNamingStrategy | null;
    readonly prettyPrint: boolean;
    readonly prettyPrintIndent: string;
    readonly useAlternativeNames: boolean;
    readonly useArrayPolymorphism: boolean;
    toString(): string;
}