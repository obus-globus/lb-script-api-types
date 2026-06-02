import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Pointer$Default } from '../../../org/lwjgl/system/Pointer$Default.d.ts'
export abstract class CustomBuffer<SELF extends CustomBuffer<SELF>> extends Pointer$Default {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number)
    // private capacity: number;
    // private container: ByteBuffer;
    // private limit: number;
    // private mark: number;
    // private position: number;
    address(): number;
    address(arg0: number): number;
    address0(): number;
    capacity(): number;
    clear(): SELF;
    compact(): SELF;
    create(arg0: number, arg1: ByteBuffer, arg2: number, arg3: number, arg4: number, arg5: number): SELF;
    duplicate(): SELF;
    flip(): SELF;
    free(): void;
    hasRemaining(): boolean;
    limit(): number;
    limit(arg0: number): SELF;
    mark(): SELF;
    nextGetIndex(): number;
    nextPutIndex(): number;
    position(): number;
    position(arg0: number): SELF;
    put(arg0: SELF): SELF;
    remaining(): number;
    reset(): SELF;
    rewind(): SELF;
    self(): SELF;
    sizeof(): number;
    slice(): SELF;
    slice(arg0: number, arg1: number): SELF;
    toString(): string;
}