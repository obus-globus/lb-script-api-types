import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkVideoEncodeH264FrameSizeKHR extends Struct<VkVideoEncodeH264FrameSizeKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FRAMEBSIZE: number;
    static FRAMEISIZE: number;
    static FRAMEPSIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static calloc(): VkVideoEncodeH264FrameSizeKHR;
    static calloc(paramarg0: MemoryStack): VkVideoEncodeH264FrameSizeKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkVideoEncodeH264FrameSizeKHR;
    static create(paramarg0: number): VkVideoEncodeH264FrameSizeKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkVideoEncodeH264FrameSizeKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkVideoEncodeH264FrameSizeKHR;
    static malloc(paramarg0: MemoryStack): VkVideoEncodeH264FrameSizeKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nframeBSize(paramarg0: number): number;
    static nframeBSize(paramarg0: number, paramarg1: number): void;
    static nframeISize(paramarg0: number): number;
    static nframeISize(paramarg0: number, paramarg1: number): void;
    static nframePSize(paramarg0: number): number;
    static nframePSize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkVideoEncodeH264FrameSizeKHR;
    frameBSize(): number;
    frameBSize(arg0: number): VkVideoEncodeH264FrameSizeKHR;
    frameISize(): number;
    frameISize(arg0: number): VkVideoEncodeH264FrameSizeKHR;
    framePSize(): number;
    framePSize(arg0: number): VkVideoEncodeH264FrameSizeKHR;
    set(arg0: number, arg1: number, arg2: number): VkVideoEncodeH264FrameSizeKHR;
    set(arg0: VkVideoEncodeH264FrameSizeKHR): VkVideoEncodeH264FrameSizeKHR;
    sizeof(): number;
}