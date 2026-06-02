import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class CloseShieldFilterInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    close(): void;
}