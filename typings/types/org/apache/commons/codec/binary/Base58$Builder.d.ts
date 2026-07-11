import type { Base58 } from '../../../../../org/apache/commons/codec/binary/Base58.d.ts'
import type { BaseNCodec$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$AbstractBuilder.d.ts'
export class Base58$Builder extends BaseNCodec$AbstractBuilder<Base58, Base58$Builder> {
    constructor()
    get(): Base58;
    setEncodeTable(...arg0: number[]): Base58$Builder;
}