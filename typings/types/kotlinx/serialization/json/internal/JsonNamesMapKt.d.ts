import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonNamingStrategy } from '../../../../kotlinx/serialization/json/JsonNamingStrategy.d.ts'
import type { DescriptorSchemaCache$Key } from '../../../../kotlinx/serialization/json/internal/DescriptorSchemaCache$Key.d.ts'
export class JsonNamesMapKt extends Object {
    static deserializationNamesMap(self: Json, descriptor: SerialDescriptor): { [key: string]: number };
    static getJsonDeserializationNamesKey(): DescriptorSchemaCache$Key<{ [key: string]: number }>;
    static getJsonElementName(self: SerialDescriptor, json: Json, index: number): string;
    static getJsonEncodedNames(self: SerialDescriptor, json: Json): string[];
    static getJsonNameIndex(self: SerialDescriptor, json: Json, name: string): number;
    static getJsonNameIndexOrThrow(self: SerialDescriptor, json: Json, name: string, suffix: string): number;
    static getJsonSerializationNamesKey(): DescriptorSchemaCache$Key<string[]>;
    static ignoreUnknownKeys(self: SerialDescriptor, json: Json): boolean;
    static namingStrategy(self: SerialDescriptor, json: Json): JsonNamingStrategy | null;
    static serializationNamesIndices(self: SerialDescriptor, json: Json, strategy: JsonNamingStrategy): string[];
    static tryCoerceValue(self: Json, descriptor: SerialDescriptor, index: number, peekNull: (param0: boolean) => boolean, peekString: () => string | null, onEnumCoercing: () => void): boolean;
}