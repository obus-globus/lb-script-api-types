import type { Pointer } from '../../../com/sun/jna/Pointer.d.ts'
import type { WString } from '../../../com/sun/jna/WString.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class Pointer$Opaque extends Pointer {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    private constructor(arg0: number)
    // private MSG: string;
    clear(arg0: number): void;
    dump(arg0: number, arg1: number): string;
    getByte(arg0: number): number;
    getByteBuffer(arg0: number, arg1: number): ByteBuffer;
    getChar(arg0: number): string;
    getDouble(arg0: number): number;
    getFloat(arg0: number): number;
    getInt(arg0: number): number;
    getLong(arg0: number): number;
    getPointer(arg0: number): Pointer;
    getShort(arg0: number): number;
    getString(arg0: number): string;
    getString(arg0: number, arg1: string): string;
    getWideString(arg0: number): string;
    indexOf(arg0: number, arg1: number): number;
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
    setMemory(arg0: number, arg1: number, arg2: number): void;
    setPointer(arg0: number, arg1: Pointer): void;
    setShort(arg0: number, arg1: number): void;
    setString(arg0: number, arg1: WString): void;
    setString(arg0: number, arg1: string): void;
    setString(arg0: number, arg1: string, arg2: string): void;
    setWideString(arg0: number, arg1: string): void;
    share(arg0: number): Pointer;
    share(arg0: number, arg1: number): Pointer;
    toString(): string;
    write(arg0: number, arg1: Pointer[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    write(arg0: number, arg1: number[], arg2: number, arg3: number): void;
}