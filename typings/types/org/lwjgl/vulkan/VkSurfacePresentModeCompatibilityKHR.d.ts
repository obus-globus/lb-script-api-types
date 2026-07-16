import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSurfacePresentModeCompatibilityKHR extends Struct<VkSurfacePresentModeCompatibilityKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTMODES: number;
    static PRESENTMODECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSurfacePresentModeCompatibilityKHR;
    static calloc(paramarg0: MemoryStack): VkSurfacePresentModeCompatibilityKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfacePresentModeCompatibilityKHR;
    static create(paramarg0: number): VkSurfacePresentModeCompatibilityKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfacePresentModeCompatibilityKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfacePresentModeCompatibilityKHR;
    static malloc(paramarg0: MemoryStack): VkSurfacePresentModeCompatibilityKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentModes(paramarg0: number): IntBuffer;
    static npPresentModes(paramarg0: number, paramarg1: IntBuffer): void;
    static npresentModeCount(paramarg0: number): number;
    static npresentModeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfacePresentModeCompatibilityKHR;
    pNext(): number;
    pNext(arg0: number): VkSurfacePresentModeCompatibilityKHR;
    pPresentModes(): IntBuffer;
    pPresentModes(arg0: IntBuffer): VkSurfacePresentModeCompatibilityKHR;
    presentModeCount(): number;
    presentModeCount(arg0: number): VkSurfacePresentModeCompatibilityKHR;
    sType(): number;
    sType(arg0: number): VkSurfacePresentModeCompatibilityKHR;
    sType$Default(): VkSurfacePresentModeCompatibilityKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: IntBuffer): VkSurfacePresentModeCompatibilityKHR;
    set(arg0: VkSurfacePresentModeCompatibilityKHR): VkSurfacePresentModeCompatibilityKHR;
    sizeof(): number;
}