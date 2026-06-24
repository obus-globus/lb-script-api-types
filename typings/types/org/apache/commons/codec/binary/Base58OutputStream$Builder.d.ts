import type { Base58 } from '../../../../../org/apache/commons/codec/binary/Base58.d.ts'
import type { Base58OutputStream } from '../../../../../org/apache/commons/codec/binary/Base58OutputStream.d.ts'
import type { BaseNCodecOutputStream$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream$AbstractBuilder.d.ts'
export class Base58OutputStream$Builder extends BaseNCodecOutputStream$AbstractBuilder<Base58OutputStream, Base58, Base58OutputStream$Builder> {
    constructor()
    get(): Base58OutputStream;
    newBaseNCodec(): Base58;
}