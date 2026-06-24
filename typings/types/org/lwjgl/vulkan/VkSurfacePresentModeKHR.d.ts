import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSurfacePresentModeKHR extends Struct<VkSurfacePresentModeKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTMODE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSurfacePresentModeKHR;
    static calloc(paramarg0: MemoryStack): VkSurfacePresentModeKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfacePresentModeKHR;
    static create(paramarg0: number): VkSurfacePresentModeKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfacePresentModeKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfacePresentModeKHR;
    static malloc(paramarg0: MemoryStack): VkSurfacePresentModeKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentMode(paramarg0: number): number;
    static npresentMode(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfacePresentModeKHR;
    pNext(): number;
    pNext(arg0: number): VkSurfacePresentModeKHR;
    presentMode(): number;
    presentMode(arg0: number): VkSurfacePresentModeKHR;
    sType(): number;
    sType(arg0: number): VkSurfacePresentModeKHR;
    sType$Default(): VkSurfacePresentModeKHR;
    set(arg0: number, arg1: number, arg2: number): VkSurfacePresentModeKHR;
    set(arg0: VkSurfacePresentModeKHR): VkSurfacePresentModeKHR;
    sizeof(): number;
}