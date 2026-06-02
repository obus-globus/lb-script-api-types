import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { SharedLibrary$Default } from '../../../../org/lwjgl/system/SharedLibrary$Default.d.ts'
export class LinuxLibrary extends SharedLibrary$Default {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: string)
    constructor(arg0: string, arg1: number)
    free(): void;
    getFunctionAddress(arg0: ByteBuffer): number;
    getPath(): string;
}