import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractBaseNCodecStreamBuilder } from '../../../../../org/apache/commons/codec/binary/AbstractBaseNCodecStreamBuilder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
export abstract class BaseNCodecInputStream$AbstracBuilder<T extends unknown, C extends BaseNCodec, B extends AbstractBaseNCodecStreamBuilder<T, C, B>> extends AbstractBaseNCodecStreamBuilder<T, C, B> {
    constructor()
    // private inputStream: InputStream;
    getInputStream(): InputStream;
    setByteArray(arg0: number[]): B;
    setInputStream(arg0: InputStream): B;
}