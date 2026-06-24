import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VmaAllocateDeviceMemoryFunction } from '../../../../org/lwjgl/util/vma/VmaAllocateDeviceMemoryFunction.d.ts'
import type { VmaAllocateDeviceMemoryFunctionI } from '../../../../org/lwjgl/util/vma/VmaAllocateDeviceMemoryFunctionI.d.ts'
import type { VmaFreeDeviceMemoryFunction } from '../../../../org/lwjgl/util/vma/VmaFreeDeviceMemoryFunction.d.ts'
import type { VmaFreeDeviceMemoryFunctionI } from '../../../../org/lwjgl/util/vma/VmaFreeDeviceMemoryFunctionI.d.ts'
export class VmaDeviceMemoryCallbacks extends Struct<VmaDeviceMemoryCallbacks> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PFNALLOCATE: number;
    static PFNFREE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSERDATA: number;
    static SIZEOF: number;
    static calloc(): VmaDeviceMemoryCallbacks;
    static calloc(paramarg0: MemoryStack): VmaDeviceMemoryCallbacks;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VmaDeviceMemoryCallbacks;
    static create(paramarg0: number): VmaDeviceMemoryCallbacks;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VmaDeviceMemoryCallbacks;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VmaDeviceMemoryCallbacks;
    static malloc(paramarg0: MemoryStack): VmaDeviceMemoryCallbacks;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npUserData(paramarg0: number): number;
    static npUserData(paramarg0: number, paramarg1: number): void;
    static npfnAllocate(paramarg0: number): VmaAllocateDeviceMemoryFunction;
    static npfnAllocate(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number) => void): void;
    static npfnFree(paramarg0: number): VmaFreeDeviceMemoryFunction;
    static npfnFree(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VmaDeviceMemoryCallbacks;
    pUserData(): number;
    pUserData(arg0: number): VmaDeviceMemoryCallbacks;
    pfnAllocate(): VmaAllocateDeviceMemoryFunction;
    pfnAllocate(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number) => void): VmaDeviceMemoryCallbacks;
    pfnFree(): VmaFreeDeviceMemoryFunction;
    pfnFree(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number) => void): VmaDeviceMemoryCallbacks;
    set(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number) => void, arg1: (param0: number, param1: number, param2: number, param3: number, param4: number) => void, arg2: number): VmaDeviceMemoryCallbacks;
    set(arg0: VmaDeviceMemoryCallbacks): VmaDeviceMemoryCallbacks;
    sizeof(): number;
}