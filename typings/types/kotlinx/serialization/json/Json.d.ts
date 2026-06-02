import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { StringFormat } from '../../../kotlinx/serialization/StringFormat.d.ts'
import type { Json$Default } from '../../../kotlinx/serialization/json/Json$Default.d.ts'
import type { JsonConfiguration } from '../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { DescriptorSchemaCache } from '../../../kotlinx/serialization/json/internal/DescriptorSchemaCache.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class Json extends Object implements StringFormat {
    static Default: Json$Default;
    protected constructor(configuration: JsonConfiguration, serializersModule: SerializersModule)
    // private _schemaCache: DescriptorSchemaCache;
    /*not mapped: */ get_schemaCache$kotlinx_serialization_json(): DescriptorSchemaCache;
    readonly configuration: JsonConfiguration;
    readonly serializersModule: SerializersModule;
    decodeFromJsonElement<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>, element: JsonElement): T;
    decodeFromString<T extends Object | number | string | boolean>(string: string): T;
    decodeFromString<T extends Object | number | string | boolean>(deserializer: DeserializationStrategy<T>, string: string): T;
    encodeToJsonElement<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): JsonElement;
    encodeToString<T extends Object | number | string | boolean>(value: T): string;
    encodeToString<T extends Object | number | string | boolean>(serializer: SerializationStrategy<T>, value: T): string;
    parseToJsonElement(string: string): JsonElement;
}