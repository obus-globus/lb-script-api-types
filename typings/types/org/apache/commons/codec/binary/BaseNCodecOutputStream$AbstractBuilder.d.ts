import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractBaseNCodecStreamBuilder } from '../../../../../org/apache/commons/codec/binary/AbstractBaseNCodecStreamBuilder.d.ts'
import type { BaseNCodec } from '../../../../../org/apache/commons/codec/binary/BaseNCodec.d.ts'
export abstract class BaseNCodecOutputStream$AbstractBuilder<T extends unknown, C extends BaseNCodec, B extends BaseNCodecOutputStream$AbstractBuilder<T, C, B>> extends AbstractBaseNCodecStreamBuilder<T, C, B> {
    constructor()
    // private outputStream: OutputStream;
    getOutputStream(): OutputStream;
    setOutputStream(arg0: OutputStream): B;
}