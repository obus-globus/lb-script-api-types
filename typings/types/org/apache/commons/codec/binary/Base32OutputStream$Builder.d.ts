import type { Base32 } from '../../../../../org/apache/commons/codec/binary/Base32.d.ts'
import type { Base32OutputStream } from '../../../../../org/apache/commons/codec/binary/Base32OutputStream.d.ts'
import type { BaseNCodecOutputStream$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream$AbstractBuilder.d.ts'
export class Base32OutputStream$Builder extends BaseNCodecOutputStream$AbstractBuilder<Base32OutputStream, Base32, Base32OutputStream$Builder> {
    constructor()
    get(): Base32OutputStream;
    newBaseNCodec(): Base32;
}