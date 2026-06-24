import type { Base64 } from '../../../../../org/apache/commons/codec/binary/Base64.d.ts'
import type { Base64InputStream } from '../../../../../org/apache/commons/codec/binary/Base64InputStream.d.ts'
import type { BaseNCodecInputStream$AbstracBuilder } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream$AbstracBuilder.d.ts'
export class Base64InputStream$Builder extends BaseNCodecInputStream$AbstracBuilder<Base64InputStream, Base64, Base64InputStream$Builder> {
    constructor()
    get(): Base64InputStream;
    newBaseNCodec(): Base64;
}