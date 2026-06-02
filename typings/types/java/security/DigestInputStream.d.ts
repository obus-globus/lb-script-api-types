import type { FilterInputStream } from '../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { MessageDigest } from '../../java/security/MessageDigest.d.ts'
export class DigestInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: MessageDigest)
    // private digest: MessageDigest;
    // private on: boolean;
    getMessageDigest(): MessageDigest;
    on(arg0: boolean): void;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    setMessageDigest(arg0: MessageDigest): void;
    toString(): string;
}