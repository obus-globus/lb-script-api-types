import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkTraceRaysIndirectCommandKHR extends Struct<VkTraceRaysIndirectCommandKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEPTH: number;
    static HEIGHT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static WIDTH: number;
    static calloc(): VkTraceRaysIndirectCommandKHR;
    static calloc(paramarg0: MemoryStack): VkTraceRaysIndirectCommandKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTraceRaysIndirectCommandKHR;
    static create(paramarg0: number): VkTraceRaysIndirectCommandKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTraceRaysIndirectCommandKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTraceRaysIndirectCommandKHR;
    static malloc(paramarg0: MemoryStack): VkTraceRaysIndirectCommandKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndepth(paramarg0: number): number;
    static ndepth(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTraceRaysIndirectCommandKHR;
    depth(): number;
    depth(arg0: number): VkTraceRaysIndirectCommandKHR;
    height(): number;
    height(arg0: number): VkTraceRaysIndirectCommandKHR;
    set(arg0: number, arg1: number, arg2: number): VkTraceRaysIndirectCommandKHR;
    set(arg0: VkTraceRaysIndirectCommandKHR): VkTraceRaysIndirectCommandKHR;
    sizeof(): number;
    width(): number;
    width(arg0: number): VkTraceRaysIndirectCommandKHR;
}