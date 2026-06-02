import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
export class SkipShieldingInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    skip(arg0: number): number;
}