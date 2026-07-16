import type { IOException } from '../../../../java/io/IOException.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { WritableByteChannel } from '../../../../java/nio/channels/WritableByteChannel.d.ts'
import type { STBIWriteCallback } from '../../../../org/lwjgl/stb/STBIWriteCallback.d.ts'
import type { STBIWriteCallbackI } from '../../../../org/lwjgl/stb/STBIWriteCallbackI.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
export class NativeImage$WriteCallback extends STBIWriteCallback {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIWriteCallback;
    static create(paramarg0: (param0: number, param1: number, param2: number) => void): STBIWriteCallback;
    static createSafe(paramarg0: number): STBIWriteCallback;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getData(paramarg0: number, paramarg1: number): ByteBuffer;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    private constructor(output: WritableByteChannel)
    // private exception: IOException;
    // private output: WritableByteChannel;
    invoke(context: number, data: number, size: number): void;
    throwIfException(): void;
}