import type { MeasurableStream } from '../../../../../it/unimi/dsi/fastutil/io/MeasurableStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export abstract class MeasurableInputStream extends InputStream implements MeasurableStream {
    static nullInputStream(): InputStream;
    constructor()
    length(): number;
    position(): number;
}