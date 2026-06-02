import type { FilterInputStream } from '../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class LoopingAudioStream$NoCloseBuffer extends FilterInputStream {
    static nullInputStream(): InputStream;
    private constructor(in_: InputStream)
    close(): void;
}