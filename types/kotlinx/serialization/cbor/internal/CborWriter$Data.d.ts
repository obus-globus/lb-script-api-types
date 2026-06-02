import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ByteArrayOutput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayOutput.d.ts'
export class CborWriter$Data extends Object {
    constructor(bytes: ByteArrayOutput, elementCount: number)
    readonly bytes: ByteArrayOutput;
    elementCount: number;
}