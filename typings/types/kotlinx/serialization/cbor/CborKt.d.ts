import type { Object } from '../../../java/lang/Object.d.ts'
import type { Cbor } from '../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { CborBuilder } from '../../../kotlinx/serialization/cbor/CborBuilder.d.ts'
export class CborKt extends Object {
    static Cbor(from: Cbor, builderAction: (param0: CborBuilder) => void): Cbor;
}