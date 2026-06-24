import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWaylandSurfaceCreateInfoKHR extends Struct<VkWaylandSurfaceCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISPLAY: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static SURFACE: number;
    static calloc(): VkWaylandSurfaceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkWaylandSurfaceCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWaylandSurfaceCreateInfoKHR;
    static create(paramarg0: number): VkWaylandSurfaceCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWaylandSurfaceCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWaylandSurfaceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkWaylandSurfaceCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndisplay(paramarg0: number): number;
    static ndisplay(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsurface(paramarg0: number): number;
    static nsurface(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWaylandSurfaceCreateInfoKHR;
    display(): number;
    display(arg0: number): VkWaylandSurfaceCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkWaylandSurfaceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkWaylandSurfaceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkWaylandSurfaceCreateInfoKHR;
    sType$Default(): VkWaylandSurfaceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkWaylandSurfaceCreateInfoKHR;
    set(arg0: VkWaylandSurfaceCreateInfoKHR): VkWaylandSurfaceCreateInfoKHR;
    sizeof(): number;
    surface(): number;
    surface(arg0: number): VkWaylandSurfaceCreateInfoKHR;
}