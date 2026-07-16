import type { File } from '../../../../java/io/File.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FileDescriptor extends Object {
    static from(paramarg0: File): FileDescriptor;
    static from(paramarg0: string): FileDescriptor;
    static pipe(): FileDescriptor[];
    constructor(arg0: number)
    // private fd: number;
    // private state: number;
    casState(arg0: number, arg1: number): boolean;
    close(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    intValue(): number;
    isOpen(): boolean;
    markClosed(): boolean;
    read(arg0: ByteBuffer, arg1: number, arg2: number): number;
    readAddress(arg0: number, arg1: number, arg2: number): number;
    toString(): string;
    write(arg0: ByteBuffer, arg1: number, arg2: number): number;
    writeAddress(arg0: number, arg1: number, arg2: number): number;
    writev(arg0: ByteBuffer[], arg1: number, arg2: number, arg3: number): number;
    writevAddresses(arg0: number, arg1: number): number;
}