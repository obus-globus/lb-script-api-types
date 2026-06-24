import type { Base58 } from '../../../../../org/apache/commons/codec/binary/Base58.d.ts'
import type { Base58InputStream } from '../../../../../org/apache/commons/codec/binary/Base58InputStream.d.ts'
import type { BaseNCodecInputStream$AbstracBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream$AbstracBuilder.d.ts'
export class Base58InputStream$Builder extends BaseNCodecInputStream$AbstracBuilder<Base58InputStream, Base58, Base58InputStream$Builder> {
    constructor()
    get(): Base58InputStream;
    newBaseNCodec(): Base58;
}