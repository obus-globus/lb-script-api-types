import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkSurfaceCapabilitiesPresentWait2KHR extends Struct<VkSurfaceCapabilitiesPresentWait2KHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRESENTWAIT2SUPPORTED: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkSurfaceCapabilitiesPresentWait2KHR;
    static calloc(paramarg0: MemoryStack): VkSurfaceCapabilitiesPresentWait2KHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSurfaceCapabilitiesPresentWait2KHR;
    static create(paramarg0: number): VkSurfaceCapabilitiesPresentWait2KHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSurfaceCapabilitiesPresentWait2KHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSurfaceCapabilitiesPresentWait2KHR;
    static malloc(paramarg0: MemoryStack): VkSurfaceCapabilitiesPresentWait2KHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npresentWait2Supported(paramarg0: number): number;
    static npresentWait2Supported(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkSurfaceCapabilitiesPresentWait2KHR;
    pNext(): number;
    pNext(arg0: number): VkSurfaceCapabilitiesPresentWait2KHR;
    presentWait2Supported(): boolean;
    presentWait2Supported(arg0: boolean): VkSurfaceCapabilitiesPresentWait2KHR;
    sType(): number;
    sType(arg0: number): VkSurfaceCapabilitiesPresentWait2KHR;
    sType$Default(): VkSurfaceCapabilitiesPresentWait2KHR;
    set(arg0: number, arg1: number, arg2: boolean): VkSurfaceCapabilitiesPresentWait2KHR;
    set(arg0: VkSurfaceCapabilitiesPresentWait2KHR): VkSurfaceCapabilitiesPresentWait2KHR;
    sizeof(): number;
}