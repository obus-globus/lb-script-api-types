import type { Base16 } from '../../../../../org/apache/commons/codec/binary/Base16.d.ts'
import type { Base16InputStream } from '../../../../../org/apache/commons/codec/binary/Base16InputStream.d.ts'
import type { BaseNCodecInputStream$AbstracBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream$AbstracBuilder.d.ts'
export class Base16InputStream$Builder extends BaseNCodecInputStream$AbstracBuilder<Base16InputStream, Base16, Base16InputStream$Builder> {
    constructor()
    get(): Base16InputStream;
    newBaseNCodec(): Base16;
}