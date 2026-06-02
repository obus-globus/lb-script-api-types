import type { MeasurableStream } from '../../../../../../com/viaversion/viaversion/libs/fastutil/io/MeasurableStream.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export abstract class MeasurableOutputStream extends OutputStream implements MeasurableStream {
    static nullOutputStream(): OutputStream;
    constructor()
}