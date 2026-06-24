import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkResolveImageModeInfoKHR extends Struct<VkResolveImageModeInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESOLVEMODE: number;
    static SIZEOF: number;
    static STENCILRESOLVEMODE: number;
    static STYPE: number;
    static calloc(): VkResolveImageModeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkResolveImageModeInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkResolveImageModeInfoKHR;
    static create(paramarg0: number): VkResolveImageModeInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkResolveImageModeInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkResolveImageModeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkResolveImageModeInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresolveMode(paramarg0: number): number;
    static nresolveMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstencilResolveMode(paramarg0: number): number;
    static nstencilResolveMode(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkResolveImageModeInfoKHR;
    flags(): number;
    flags(arg0: number): VkResolveImageModeInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkResolveImageModeInfoKHR;
    resolveMode(): number;
    resolveMode(arg0: number): VkResolveImageModeInfoKHR;
    sType(): number;
    sType(arg0: number): VkResolveImageModeInfoKHR;
    sType$Default(): VkResolveImageModeInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkResolveImageModeInfoKHR;
    set(arg0: VkResolveImageModeInfoKHR): VkResolveImageModeInfoKHR;
    sizeof(): number;
    stencilResolveMode(): number;
    stencilResolveMode(arg0: number): VkResolveImageModeInfoKHR;
}