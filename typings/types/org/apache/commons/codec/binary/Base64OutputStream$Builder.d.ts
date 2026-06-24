import type { Base64 } from '../../../../../org/apache/commons/codec/binary/Base64.d.ts'
import type { Base64OutputStream } from '../../../../../org/apache/commons/codec/binary/Base64OutputStream.d.ts'
import type { BaseNCodecOutputStream$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream$AbstractBuilder.d.ts'
export class Base64OutputStream$Builder extends BaseNCodecOutputStream$AbstractBuilder<Base64OutputStream, Base64, Base64OutputStream$Builder> {
    constructor()
    get(): Base64OutputStream;
    newBaseNCodec(): Base64;
}