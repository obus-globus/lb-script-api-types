import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkXcbSurfaceCreateInfoKHR extends Struct<VkXcbSurfaceCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONNECTION: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static WINDOW: number;
    static calloc(): VkXcbSurfaceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkXcbSurfaceCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkXcbSurfaceCreateInfoKHR;
    static create(paramarg0: number): VkXcbSurfaceCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkXcbSurfaceCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkXcbSurfaceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkXcbSurfaceCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconnection(paramarg0: number): number;
    static nconnection(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nwindow(paramarg0: number): number;
    static nwindow(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    connection(): number;
    connection(arg0: number): VkXcbSurfaceCreateInfoKHR;
    create(arg0: number, arg1: ByteBuffer): VkXcbSurfaceCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkXcbSurfaceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkXcbSurfaceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkXcbSurfaceCreateInfoKHR;
    sType$Default(): VkXcbSurfaceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkXcbSurfaceCreateInfoKHR;
    set(arg0: VkXcbSurfaceCreateInfoKHR): VkXcbSurfaceCreateInfoKHR;
    sizeof(): number;
    window(): number;
    window(arg0: number): VkXcbSurfaceCreateInfoKHR;
}