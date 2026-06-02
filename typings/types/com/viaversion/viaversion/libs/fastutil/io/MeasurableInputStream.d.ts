import type { MeasurableStream } from '../../../../../../com/viaversion/viaversion/libs/fastutil/io/MeasurableStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export abstract class MeasurableInputStream extends InputStream implements MeasurableStream {
    static nullInputStream(): InputStream;
    constructor()
}