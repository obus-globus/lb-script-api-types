import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSurfaceProtectedCapabilitiesKHR extends Struct<VkSurfaceProtectedCapabilitiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUPPORTSPROTECTED: number;
    static calloc(): VkSurfaceProtectedCapabilitiesKHR;
    static calloc(paramarg0: MemoryStack): VkSurfaceProtectedCapabilitiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfaceProtectedCapabilitiesKHR;
    static create(paramarg0: number): VkSurfaceProtectedCapabilitiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfaceProtectedCapabilitiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfaceProtectedCapabilitiesKHR;
    static malloc(paramarg0: MemoryStack): VkSurfaceProtectedCapabilitiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsupportsProtected(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfaceProtectedCapabilitiesKHR;
    pNext(): number;
    pNext(arg0: number): VkSurfaceProtectedCapabilitiesKHR;
    sType(): number;
    sType(arg0: number): VkSurfaceProtectedCapabilitiesKHR;
    sType$Default(): VkSurfaceProtectedCapabilitiesKHR;
    set(arg0: number, arg1: number): VkSurfaceProtectedCapabilitiesKHR;
    set(arg0: VkSurfaceProtectedCapabilitiesKHR): VkSurfaceProtectedCapabilitiesKHR;
    sizeof(): number;
    supportsProtected(): boolean;
}