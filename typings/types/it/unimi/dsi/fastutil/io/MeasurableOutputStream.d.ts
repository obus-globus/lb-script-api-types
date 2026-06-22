import type { MeasurableStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
export abstract class MeasurableOutputStream extends OutputStream implements MeasurableStream {
    static nullOutputStream(): OutputStream;
    constructor()
    length(): number;
    position(): number;
}