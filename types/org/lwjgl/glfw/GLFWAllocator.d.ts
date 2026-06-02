import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GLFWAllocateCallback } from '../../../org/lwjgl/glfw/GLFWAllocateCallback.d.ts'
import type { GLFWAllocateCallbackI } from '../../../org/lwjgl/glfw/GLFWAllocateCallbackI.d.ts'
import type { GLFWDeallocateCallback } from '../../../org/lwjgl/glfw/GLFWDeallocateCallback.d.ts'
import type { GLFWDeallocateCallbackI } from '../../../org/lwjgl/glfw/GLFWDeallocateCallbackI.d.ts'
import type { GLFWReallocateCallback } from '../../../org/lwjgl/glfw/GLFWReallocateCallback.d.ts'
import type { GLFWReallocateCallbackI } from '../../../org/lwjgl/glfw/GLFWReallocateCallbackI.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class GLFWAllocator extends Struct<GLFWAllocator> implements NativeResource {
    static ALIGNOF: number;
    static ALLOCATE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DEALLOCATE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static REALLOCATE: number;
    static SIZEOF: number;
    static USER: number;
    static calloc(): GLFWAllocator;
    static calloc(paramarg0: MemoryStack): GLFWAllocator;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): GLFWAllocator;
    static create(paramarg0: number): GLFWAllocator;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): GLFWAllocator;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): GLFWAllocator;
    static malloc(paramarg0: MemoryStack): GLFWAllocator;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nallocate(paramarg0: number): GLFWAllocateCallback;
    static nallocate(paramarg0: number, paramarg1: (param0: number, param1: number) => kotlin.Long): void;
    static ndeallocate(paramarg0: number): GLFWDeallocateCallback;
    static ndeallocate(paramarg0: number, paramarg1: (param0: number, param1: number) => void): void;
    static nreallocate(paramarg0: number): GLFWReallocateCallback;
    static nreallocate(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number) => kotlin.Long): void;
    static nuser(paramarg0: number): number;
    static nuser(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    allocate(): GLFWAllocateCallback;
    allocate(arg0: (param0: number, param1: number) => kotlin.Long): GLFWAllocator;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): GLFWAllocator;
    deallocate(): GLFWDeallocateCallback;
    deallocate(arg0: (param0: number, param1: number) => void): GLFWAllocator;
    reallocate(): GLFWReallocateCallback;
    reallocate(arg0: (param0: number, param1: number, param2: number) => kotlin.Long): GLFWAllocator;
    set(arg0: (param0: number, param1: number) => kotlin.Long, arg1: (param0: number, param1: number, param2: number) => kotlin.Long, arg2: (param0: number, param1: number) => void, arg3: number): GLFWAllocator;
    set(arg0: GLFWAllocator): GLFWAllocator;
    sizeof(): number;
    user(): number;
    user(arg0: number): GLFWAllocator;
}