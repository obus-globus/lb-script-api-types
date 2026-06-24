import type { Base32 } from '../../../../../org/apache/commons/codec/binary/Base32.d.ts'
import type { Base32InputStream } from '../../../../../org/apache/commons/codec/binary/Base32InputStream.d.ts'
import type { BaseNCodecInputStream$AbstracBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream$AbstracBuilder.d.ts'
export class Base32InputStream$Builder extends BaseNCodecInputStream$AbstracBuilder<Base32InputStream, Base32, Base32InputStream$Builder> {
    constructor()
    get(): Base32InputStream;
    newBaseNCodec(): Base32;
}