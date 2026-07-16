import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264GopRemainingFrameInfoKHR extends Struct<VkVideoEncodeH264GopRemainingFrameInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GOPREMAININGB: number;
    static GOPREMAININGI: number;
    static GOPREMAININGP: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static USEGOPREMAININGFRAMES: number;
    static calloc(): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static create(paramarg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ngopRemainingB(paramarg0: number): number;
    static ngopRemainingB(paramarg0: number, paramarg1: number): void;
    static ngopRemainingI(paramarg0: number): number;
    static ngopRemainingI(paramarg0: number, paramarg1: number): void;
    static ngopRemainingP(paramarg0: number): number;
    static ngopRemainingP(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nuseGopRemainingFrames(paramarg0: number): number;
    static nuseGopRemainingFrames(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    gopRemainingB(): number;
    gopRemainingB(arg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    gopRemainingI(): number;
    gopRemainingI(arg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    gopRemainingP(): number;
    gopRemainingP(arg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    sType(): number;
    sType(arg0: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    sType$Default(): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: number): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    set(arg0: VkVideoEncodeH264GopRemainingFrameInfoKHR): VkVideoEncodeH264GopRemainingFrameInfoKHR;
    sizeof(): number;
    useGopRemainingFrames(): boolean;
    useGopRemainingFrames(arg0: boolean): VkVideoEncodeH264GopRemainingFrameInfoKHR;
}