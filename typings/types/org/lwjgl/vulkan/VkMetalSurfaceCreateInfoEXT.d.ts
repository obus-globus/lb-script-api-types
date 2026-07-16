import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkMetalSurfaceCreateInfoEXT extends Struct<VkMetalSurfaceCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PLAYER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMetalSurfaceCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkMetalSurfaceCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMetalSurfaceCreateInfoEXT;
    static create(paramarg0: number): VkMetalSurfaceCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMetalSurfaceCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMetalSurfaceCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkMetalSurfaceCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npLayer(paramarg0: number, paramarg1: number): PointerBuffer;
    static npLayer(paramarg0: number, paramarg1: PointerBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMetalSurfaceCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkMetalSurfaceCreateInfoEXT;
    pLayer(arg0: number): PointerBuffer;
    pLayer(arg0: PointerBuffer): VkMetalSurfaceCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkMetalSurfaceCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkMetalSurfaceCreateInfoEXT;
    sType$Default(): VkMetalSurfaceCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: PointerBuffer): VkMetalSurfaceCreateInfoEXT;
    set(arg0: VkMetalSurfaceCreateInfoEXT): VkMetalSurfaceCreateInfoEXT;
    sizeof(): number;
}