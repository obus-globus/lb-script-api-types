import type { FilterInputStream } from '../../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
export class CloseIgnoringInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(in_: InputStream)
    close(): void;
}