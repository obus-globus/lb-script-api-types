import type { Base16 } from '../../../../../org/apache/commons/codec/binary/Base16.d.ts'
import type { Base16OutputStream } from '../../../../../org/apache/commons/codec/binary/Base16OutputStream.d.ts'
import type { BaseNCodecOutputStream$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream$AbstractBuilder.d.ts'
export class Base16OutputStream$Builder extends BaseNCodecOutputStream$AbstractBuilder<Base16OutputStream, Base16, Base16OutputStream$Builder> {
    constructor()
    get(): Base16OutputStream;
    newBaseNCodec(): Base16;
}