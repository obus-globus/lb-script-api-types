import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDisplaySurfaceStereoCreateInfoNV } from '../../../org/lwjgl/vulkan/VkDisplaySurfaceStereoCreateInfoNV.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkDisplaySurfaceCreateInfoKHR extends Struct<VkDisplaySurfaceCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static ALPHAMODE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAYMODE: number;
    static FLAGS: number;
    static GLOBALALPHA: number;
    static IMAGEEXTENT: number;
    static PLANEINDEX: number;
    static PLANESTACKINDEX: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSFORM: number;
    static calloc(): VkDisplaySurfaceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkDisplaySurfaceCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDisplaySurfaceCreateInfoKHR;
    static create(paramarg0: number): VkDisplaySurfaceCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDisplaySurfaceCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDisplaySurfaceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkDisplaySurfaceCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nalphaMode(paramarg0: number): number;
    static nalphaMode(paramarg0: number, paramarg1: number): void;
    static ndisplayMode(paramarg0: number): number;
    static ndisplayMode(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nglobalAlpha(paramarg0: number): number;
    static nglobalAlpha(paramarg0: number, paramarg1: number): void;
    static nimageExtent(paramarg0: number): VkExtent2D;
    static nimageExtent(paramarg0: number, paramarg1: VkExtent2D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nplaneIndex(paramarg0: number): number;
    static nplaneIndex(paramarg0: number, paramarg1: number): void;
    static nplaneStackIndex(paramarg0: number): number;
    static nplaneStackIndex(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntransform(paramarg0: number): number;
    static ntransform(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    alphaMode(): number;
    alphaMode(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDisplaySurfaceCreateInfoKHR;
    displayMode(): number;
    displayMode(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    globalAlpha(): number;
    globalAlpha(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    imageExtent(): VkExtent2D;
    imageExtent(arg0: (param0: VkExtent2D) => void): VkDisplaySurfaceCreateInfoKHR;
    imageExtent(arg0: VkExtent2D): VkDisplaySurfaceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    pNext(arg0: VkDisplaySurfaceStereoCreateInfoNV): VkDisplaySurfaceCreateInfoKHR;
    planeIndex(): number;
    planeIndex(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    planeStackIndex(): number;
    planeStackIndex(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkDisplaySurfaceCreateInfoKHR;
    sType$Default(): VkDisplaySurfaceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: VkExtent2D): VkDisplaySurfaceCreateInfoKHR;
    set(arg0: VkDisplaySurfaceCreateInfoKHR): VkDisplaySurfaceCreateInfoKHR;
    sizeof(): number;
    transform(): number;
    transform(arg0: number): VkDisplaySurfaceCreateInfoKHR;
}