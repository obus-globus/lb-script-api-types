import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonNamingStrategy } from '../../../../kotlinx/serialization/json/JsonNamingStrategy.d.ts'
import type { DescriptorSchemaCache$Key } from '../../../../kotlinx/serialization/json/internal/DescriptorSchemaCache$Key.d.ts'
export class JsonNamesMapKt extends Object {
    static deserializationNamesMap(paramarg0: Json, paramarg1: SerialDescriptor): { [key: string]: number };
    static getJsonDeserializationNamesKey(): DescriptorSchemaCache$Key<Object>;
    static getJsonElementName(paramarg0: SerialDescriptor, paramarg1: Json, paramarg2: number): string;
    static getJsonEncodedNames(paramarg0: SerialDescriptor, paramarg1: Json): string[];
    static getJsonNameIndex(paramarg0: SerialDescriptor, paramarg1: Json, paramarg2: string): number;
    static getJsonNameIndexOrThrow(paramarg0: SerialDescriptor, paramarg1: Json, paramarg2: string, paramarg3: string): number;
    static getJsonSerializationNamesKey(): DescriptorSchemaCache$Key<(Object | null)[]>;
    static ignoreUnknownKeys(paramarg0: SerialDescriptor, paramarg1: Json): boolean;
    static namingStrategy(paramarg0: SerialDescriptor, paramarg1: Json): JsonNamingStrategy;
    static serializationNamesIndices(paramarg0: SerialDescriptor, paramarg1: Json, paramarg2: JsonNamingStrategy): (Object | null)[];
    static tryCoerceValue(paramarg0: Json, paramarg1: SerialDescriptor, paramarg2: number, paramarg3: Function1<Object, boolean>, paramarg4: Function0<string>, paramarg5: Function0<void>): boolean;
}