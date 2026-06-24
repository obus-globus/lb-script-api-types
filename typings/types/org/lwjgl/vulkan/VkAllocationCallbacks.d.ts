import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAllocationFunction } from '../../../org/lwjgl/vulkan/VkAllocationFunction.d.ts'
import type { VkAllocationFunctionI } from '../../../org/lwjgl/vulkan/VkAllocationFunctionI.d.ts'
import type { VkFreeFunction } from '../../../org/lwjgl/vulkan/VkFreeFunction.d.ts'
import type { VkFreeFunctionI } from '../../../org/lwjgl/vulkan/VkFreeFunctionI.d.ts'
import type { VkInternalAllocationNotification } from '../../../org/lwjgl/vulkan/VkInternalAllocationNotification.d.ts'
import type { VkInternalAllocationNotificationI } from '../../../org/lwjgl/vulkan/VkInternalAllocationNotificationI.d.ts'
import type { VkInternalFreeNotification } from '../../../org/lwjgl/vulkan/VkInternalFreeNotification.d.ts'
import type { VkInternalFreeNotificationI } from '../../../org/lwjgl/vulkan/VkInternalFreeNotificationI.d.ts'
import type { VkReallocationFunction } from '../../../org/lwjgl/vulkan/VkReallocationFunction.d.ts'
import type { VkReallocationFunctionI } from '../../../org/lwjgl/vulkan/VkReallocationFunctionI.d.ts'
export class VkAllocationCallbacks extends Struct<VkAllocationCallbacks> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PFNALLOCATION: number;
    static PFNFREE: number;
    static PFNINTERNALALLOCATION: number;
    static PFNINTERNALFREE: number;
    static PFNREALLOCATION: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSERDATA: number;
    static SIZEOF: number;
    static calloc(): VkAllocationCallbacks;
    static calloc(paramarg0: MemoryStack): VkAllocationCallbacks;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAllocationCallbacks;
    static create(paramarg0: number): VkAllocationCallbacks;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAllocationCallbacks;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAllocationCallbacks;
    static malloc(paramarg0: MemoryStack): VkAllocationCallbacks;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npUserData(paramarg0: number): number;
    static npUserData(paramarg0: number, paramarg1: number): void;
    static npfnAllocation(paramarg0: number): VkAllocationFunction;
    static npfnAllocation(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => number): void;
    static npfnFree(paramarg0: number): VkFreeFunction;
    static npfnFree(paramarg0: number, paramarg1: (param0: number, param1: number) => void): void;
    static npfnInternalAllocation(paramarg0: number): VkInternalAllocationNotification;
    static npfnInternalAllocation(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void): void;
    static npfnInternalFree(paramarg0: number): VkInternalFreeNotification;
    static npfnInternalFree(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void): void;
    static npfnReallocation(paramarg0: number): VkReallocationFunction;
    static npfnReallocation(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number, param4: number) => number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAllocationCallbacks;
    pUserData(): number;
    pUserData(arg0: number): VkAllocationCallbacks;
    pfnAllocation(): VkAllocationFunction;
    pfnAllocation(arg0: (param0: number, param1: number, param2: number, param3: number) => number): VkAllocationCallbacks;
    pfnFree(): VkFreeFunction;
    pfnFree(arg0: (param0: number, param1: number) => void): VkAllocationCallbacks;
    pfnInternalAllocation(): VkInternalAllocationNotification;
    pfnInternalAllocation(arg0: (param0: number, param1: number, param2: number, param3: number) => void): VkAllocationCallbacks;
    pfnInternalFree(): VkInternalFreeNotification;
    pfnInternalFree(arg0: (param0: number, param1: number, param2: number, param3: number) => void): VkAllocationCallbacks;
    pfnReallocation(): VkReallocationFunction;
    pfnReallocation(arg0: (param0: number, param1: number, param2: number, param3: number, param4: number) => number): VkAllocationCallbacks;
    set(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => number, arg2: (param0: number, param1: number, param2: number, param3: number, param4: number) => number, arg3: (param0: number, param1: number) => void, arg4: (param0: number, param1: number, param2: number, param3: number) => void, arg5: (param0: number, param1: number, param2: number, param3: number) => void): VkAllocationCallbacks;
    set(arg0: VkAllocationCallbacks): VkAllocationCallbacks;
    sizeof(): number;
}