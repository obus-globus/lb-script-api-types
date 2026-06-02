import type { Base32 } from '../../../../../org/apache/commons/codec/binary/Base32.d.ts'
import type { BaseNCodec$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$AbstractBuilder.d.ts'
export class Base32$Builder extends BaseNCodec$AbstractBuilder<Base32, Base32$Builder> {
    constructor()
    get(): Base32;
    setHexDecodeTable(arg0: boolean): Base32$Builder;
    setHexEncodeTable(arg0: boolean): Base32$Builder;
}