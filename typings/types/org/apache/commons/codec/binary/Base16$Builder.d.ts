import type { Base16 } from '../../../../../org/apache/commons/codec/binary/Base16.d.ts'
import type { BaseNCodec$AbstractBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodec$AbstractBuilder.d.ts'
export class Base16$Builder extends BaseNCodec$AbstractBuilder<Base16, Base16$Builder> {
    constructor()
    get(): Base16;
    setEncodeTable(arg0: number[]): Base16$Builder;
    setLowerCase(arg0: boolean): Base16$Builder;
}