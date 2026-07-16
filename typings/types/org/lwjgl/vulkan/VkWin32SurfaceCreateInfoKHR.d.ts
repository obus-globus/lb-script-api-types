import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWin32SurfaceCreateInfoKHR extends Struct<VkWin32SurfaceCreateInfoKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static HINSTANCE: number;
    static HWND: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWin32SurfaceCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkWin32SurfaceCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWin32SurfaceCreateInfoKHR;
    static create(paramarg0: number): VkWin32SurfaceCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWin32SurfaceCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWin32SurfaceCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkWin32SurfaceCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nhinstance(paramarg0: number): number;
    static nhinstance(paramarg0: number, paramarg1: number): void;
    static nhwnd(paramarg0: number): number;
    static nhwnd(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWin32SurfaceCreateInfoKHR;
    flags(): number;
    flags(arg0: number): VkWin32SurfaceCreateInfoKHR;
    hinstance(): number;
    hinstance(arg0: number): VkWin32SurfaceCreateInfoKHR;
    hwnd(): number;
    hwnd(arg0: number): VkWin32SurfaceCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkWin32SurfaceCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkWin32SurfaceCreateInfoKHR;
    sType$Default(): VkWin32SurfaceCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): VkWin32SurfaceCreateInfoKHR;
    set(arg0: VkWin32SurfaceCreateInfoKHR): VkWin32SurfaceCreateInfoKHR;
    sizeof(): number;
}