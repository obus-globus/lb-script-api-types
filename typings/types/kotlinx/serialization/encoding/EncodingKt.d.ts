import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class EncodingKt extends Object {
    static encodeCollection(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: E[], paramarg3: Function3<Object, Object, Object, void>): void;
    static encodeCollection(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: number, paramarg3: Function1<Object, void>): void;
    static encodeStructure(paramarg0: Encoder, paramarg1: SerialDescriptor, paramarg2: Function1<Object, void>): void;
}