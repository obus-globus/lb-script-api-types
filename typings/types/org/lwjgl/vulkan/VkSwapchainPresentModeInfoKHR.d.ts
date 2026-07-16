import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSwapchainPresentModeInfoKHR extends Struct<VkSwapchainPresentModeInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTMODES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SWAPCHAINCOUNT: number;
    static calloc(): VkSwapchainPresentModeInfoKHR;
    static calloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSwapchainPresentModeInfoKHR;
    static create(paramarg0: number): VkSwapchainPresentModeInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSwapchainPresentModeInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSwapchainPresentModeInfoKHR;
    static malloc(paramarg0: MemoryStack): VkSwapchainPresentModeInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentModes(paramarg0: number): IntBuffer;
    static npPresentModes(paramarg0: number, paramarg1: IntBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nswapchainCount(paramarg0: number): number;
    static nswapchainCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSwapchainPresentModeInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkSwapchainPresentModeInfoKHR;
    pPresentModes(): IntBuffer;
    pPresentModes(arg0: IntBuffer): VkSwapchainPresentModeInfoKHR;
    sType(): number;
    sType(arg0: number): VkSwapchainPresentModeInfoKHR;
    sType$Default(): VkSwapchainPresentModeInfoKHR;
    set(arg0: number, arg1: number, arg2: IntBuffer): VkSwapchainPresentModeInfoKHR;
    set(arg0: VkSwapchainPresentModeInfoKHR): VkSwapchainPresentModeInfoKHR;
    sizeof(): number;
    swapchainCount(): number;
}