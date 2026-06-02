import type { Cbor } from '../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { Cbor$Default } from '../../../kotlinx/serialization/cbor/Cbor$Default.d.ts'
import type { CborConfiguration } from '../../../kotlinx/serialization/cbor/CborConfiguration.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class CborImpl extends Cbor {
    static Default: Cbor$Default;
    constructor(configuration: CborConfiguration, serializersModule: SerializersModule)
}