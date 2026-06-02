import type { Object } from '../../java/lang/Object.d.ts'
import type { BinaryFormat } from '../../kotlinx/serialization/BinaryFormat.d.ts'
import type { DeserializationStrategy } from '../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerializationStrategy } from '../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { StringFormat } from '../../kotlinx/serialization/StringFormat.d.ts'
export class SerialFormatKt extends Object {
    static decodeFromByteArray(paramarg0: BinaryFormat, paramarg1: number[]): Object | null;
    static decodeFromHexString(paramarg0: BinaryFormat, paramarg1: string): Object | null;
    static decodeFromHexString(paramarg0: BinaryFormat, paramarg1: DeserializationStrategy<Object>, paramarg2: string): Object | null;
    static decodeFromString(paramarg0: StringFormat, paramarg1: string): Object | null;
    static encodeToByteArray(paramarg0: BinaryFormat, paramarg1: Object | null): number[];
    static encodeToHexString(paramarg0: BinaryFormat, paramarg1: Object | null): string;
    static encodeToHexString(paramarg0: BinaryFormat, paramarg1: SerializationStrategy<Object>, paramarg2: Object | null): string;
    static encodeToString(paramarg0: StringFormat, paramarg1: Object | null): string;
}