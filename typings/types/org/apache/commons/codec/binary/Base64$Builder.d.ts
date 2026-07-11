import type { Base64 } from '../../../../../org/apache/commons/codec/binary/Base64.d.ts'
import type { Base64$DecodeTableFormat } from '../../../../../org/apache/commons/codec/binary/Base64$DecodeTableFormat.d.ts'
import type { BaseNCodec$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$AbstractBuilder.d.ts'
export class Base64$Builder extends BaseNCodec$AbstractBuilder<Base64, Base64$Builder> {
    constructor()
    get(): Base64;
    setDecodeTableFormat(arg0: Base64$DecodeTableFormat): Base64$Builder;
    setEncodeTable(...arg0: number[]): Base64$Builder;
    setUrlSafe(arg0: boolean): Base64$Builder;
}