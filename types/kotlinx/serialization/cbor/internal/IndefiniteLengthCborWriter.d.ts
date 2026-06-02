import type { Cbor } from '../../../../kotlinx/serialization/cbor/Cbor.d.ts'
import type { ByteArrayOutput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayOutput.d.ts'
import type { CborWriter } from '../../../../kotlinx/serialization/cbor/internal/CborWriter.d.ts'
import type { SerialDescriptor } from '../../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeEncoder } from '../../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
export class IndefiniteLengthCborWriter extends CborWriter {
    constructor(cbor: Cbor, output: ByteArrayOutput)
    beginStructure(descriptor: SerialDescriptor): CompositeEncoder;
    endStructure(descriptor: SerialDescriptor): void;
    protected getDestination(): ByteArrayOutput;
    protected incrementChildren(): void;
}