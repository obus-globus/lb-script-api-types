import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class EncodingKt extends Object {
    static encodeCollection(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: (Object | null)[], paramarg3: (param0: Object, param1: Object, param2: Object) => void): void;
    static encodeCollection(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: number, paramarg3: (param0: Object) => void): void;
    static encodeStructure(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: (param0: Object) => void): void;
}