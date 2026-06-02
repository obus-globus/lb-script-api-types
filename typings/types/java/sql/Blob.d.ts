import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Blob extends Object{
    free(): void;
    getBinaryStream(): InputStream;
    getBinaryStream(arg0: number, arg1: number): InputStream;
    getBytes(arg0: number, arg1: number): number[];
    length(): number;
    position(arg0: Blob, arg1: number): number;
    position(arg0: number[], arg1: number): number;
    setBinaryStream(arg0: number): OutputStream;
    setBytes(arg0: number, arg1: number[]): number;
    setBytes(arg0: number, arg1: number[], arg2: number, arg3: number): number;
    truncate(arg0: number): void;
}