import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
export class DecodingKt extends Object {
    static decodeIfNullable(paramarg0: Decoder, paramarg1: DeserializationStrategy<Object>, paramarg2: () => Object | null): Object | null;
    static decodeStructure(paramarg0: Decoder, paramarg1: SerialDescriptor, paramarg2: (param0: Object | null) => Object | null): Object | null;
}