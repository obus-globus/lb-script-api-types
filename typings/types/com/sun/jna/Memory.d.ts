import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { Cleaner$Cleanable } from '../../../com/sun/jna/internal/Cleaner$Cleanable.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class Memory extends Pointer implements Closeable {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static disposeAll(): void;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    static purge(): void;
    constructor()
    constructor(arg0: number)
    // private cleanable: Cleaner$Cleanable;
    // private size: number;
    align(arg0: number): Memory;
    boundsCheck(arg0: number, arg1: number): void;
    clear(): void;
    close(): void;
    dispose(): void;
    dump(): string;
    getByte(arg0: number): number;
    getByteBuffer(arg0: number, arg1: number): ByteBuffer;
    getChar(arg0: number): string;
    getDouble(arg0: number): number;
    getFloat(arg0: number): number;
    getInt(arg0: number): number;
    getLong(arg0: number): number;
    getPointer(arg0: number): Pointer;
    getShort(arg0: number): number;
    getString(arg0: number, arg1: string): string;
    getWideString(arg0: number): string;
    read(arg0: number, arg1: Pointer[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    setByte(arg0: number, arg1: number): void;
    setChar(arg0: number, arg1: string): void;
    setDouble(arg0: number, arg1: number): void;
    setFloat(arg0: number, arg1: number): void;
    setInt(arg0: number, arg1: number): void;
    setLong(arg0: number, arg1: number): void;
    setPointer(arg0: number, arg1: Pointer): void;
    setShort(arg0: number, arg1: number): void;
    setString(arg0: number, arg1: string, arg2: string): void;
    setWideString(arg0: number, arg1: string): void;
    share(arg0: number): Pointer;
    share(arg0: number, arg1: number): Pointer;
    // private shareReferenceIfInBounds(arg0: Pointer): Pointer;
    size(): number;
    toString(): string;
    valid(): boolean;
    write(arg0: number, arg1: Pointer[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
}