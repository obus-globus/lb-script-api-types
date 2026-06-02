import type { NativeLong } from '../../../com/sun/jna/NativeLong.d.ts'
import type { WString } from '../../../com/sun/jna/WString.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Pointer extends Object {
    static NULL: Pointer;
    static createConstant(paramarg0: number): Pointer;
    static createConstant(paramarg0: number): Pointer;
    static nativeValue(paramarg0: Pointer): number;
    static nativeValue(paramarg0: Pointer, paramarg1: number): void;
    constructor()
    constructor(arg0: number)
    // private peer: number;
    clear(arg0: number): void;
    dump(arg0: number, arg1: number): string;
    equals(arg0: Object | null): boolean;
    getByte(arg0: number): number;
    getByteArray(arg0: number, arg1: number): number[];
    getByteBuffer(arg0: number, arg1: number): ByteBuffer;
    getChar(arg0: number): string;
    getCharArray(arg0: number, arg1: number): string[];
    getDouble(arg0: number): number;
    getDoubleArray(arg0: number, arg1: number): number[];
    getFloat(arg0: number): number;
    getFloatArray(arg0: number, arg1: number): number[];
    getInt(arg0: number): number;
    getIntArray(arg0: number, arg1: number): number[];
    getLong(arg0: number): number;
    getLongArray(arg0: number, arg1: number): number[];
    getNativeLong(arg0: number): NativeLong;
    getPointer(arg0: number): Pointer;
    getPointerArray(arg0: number): Pointer[];
    getPointerArray(arg0: number, arg1: number): Pointer[];
    getShort(arg0: number): number;
    getShortArray(arg0: number, arg1: number): number[];
    getString(arg0: number): string;
    getString(arg0: number, arg1: string): string;
    getStringArray(arg0: number): string[];
    getStringArray(arg0: number, arg1: number): string[];
    getStringArray(arg0: number, arg1: number, arg2: string): string[];
    getStringArray(arg0: number, arg1: string): string[];
    getValue(arg0: number, arg1: Class<Object>, arg2: Object): Object;
    getWideString(arg0: number): string;
    getWideStringArray(arg0: number): string[];
    getWideStringArray(arg0: number, arg1: number): string[];
    hashCode(): number;
    indexOf(arg0: number, arg1: number): number;
    read(arg0: number, arg1: Pointer[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: string[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    read(arg0: number, arg1: number[], arg2: number, arg3: number): void;
    // private readArray(arg0: number, arg1: Object, arg2: Class<Object>): void;
    setByte(arg0: number, arg1: number): void;
    setChar(arg0: number, arg1: string): void;
    setDouble(arg0: number, arg1: number): void;
    setFloat(arg0: number, arg1: number): void;
    setInt(arg0: number, arg1: number): void;
    setLong(arg0: number, arg1: number): void;
    setMemory(arg0: number, arg1: number, arg2: number): void;
    setNativeLong(arg0: number, arg1: NativeLong): void;
    setPointer(arg0: number, arg1: Pointer): void;
    setShort(arg0: number, arg1: number): void;
    setString(arg0: number, arg1: WString): void;
    setString(arg0: number, arg1: string): void;
    setString(arg0: number, arg1: string, arg2: string): void;
    setValue(arg0: number, arg1: Object, arg2: Class<Object>): void;
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
    // private writeArray(arg0: number, arg1: Object, arg2: Class<Object>): void;
}