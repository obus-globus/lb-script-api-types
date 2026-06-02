import type { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class BytesInputStream extends ByteArrayInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: number[])
    close(): void;
    getBytes(): number[];
}