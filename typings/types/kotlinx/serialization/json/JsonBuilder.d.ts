import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClassDiscriminatorMode } from '../../../kotlinx/serialization/json/ClassDiscriminatorMode.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonConfiguration } from '../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonNamingStrategy } from '../../../kotlinx/serialization/json/JsonNamingStrategy.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class JsonBuilder extends Object {
    constructor(json: Json)
    allowComments: boolean;
    allowSpecialFloatingPointValues: boolean;
    allowStructuredMapKeys: boolean;
    allowTrailingComma: boolean;
    classDiscriminator: string;
    classDiscriminatorMode: ClassDiscriminatorMode;
    coerceInputValues: boolean;
    decodeEnumsCaseInsensitive: boolean;
    encodeDefaults: boolean;
    exceptionsWithDebugInfo: boolean;
    explicitNulls: boolean;
    ignoreUnknownKeys: boolean;
    // private isLenient: boolean;
    /*not mapped: */ isLenient(): boolean;
    namingStrategy: JsonNamingStrategy | null;
    prettyPrint: boolean;
    prettyPrintIndent: string;
    serializersModule: SerializersModule;
    useAlternativeNames: boolean;
    useArrayPolymorphism: boolean;
    build(): JsonConfiguration;
}