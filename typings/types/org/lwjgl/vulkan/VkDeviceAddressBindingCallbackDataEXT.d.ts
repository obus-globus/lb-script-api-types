import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDeviceAddressBindingCallbackDataEXT extends Struct<VkDeviceAddressBindingCallbackDataEXT> implements NativeResource {
    static ALIGNOF: number;
    static BASEADDRESS: number;
    static BINDINGTYPE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceAddressBindingCallbackDataEXT;
    static calloc(paramarg0: MemoryStack): VkDeviceAddressBindingCallbackDataEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceAddressBindingCallbackDataEXT;
    static create(paramarg0: number): VkDeviceAddressBindingCallbackDataEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceAddressBindingCallbackDataEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceAddressBindingCallbackDataEXT;
    static malloc(paramarg0: MemoryStack): VkDeviceAddressBindingCallbackDataEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbaseAddress(paramarg0: number): number;
    static nbaseAddress(paramarg0: number, paramarg1: number): void;
    static nbindingType(paramarg0: number): number;
    static nbindingType(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    baseAddress(): number;
    baseAddress(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    bindingType(): number;
    bindingType(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceAddressBindingCallbackDataEXT;
    flags(): number;
    flags(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    pNext(): number;
    pNext(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    sType(): number;
    sType(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    sType$Default(): VkDeviceAddressBindingCallbackDataEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkDeviceAddressBindingCallbackDataEXT;
    set(arg0: VkDeviceAddressBindingCallbackDataEXT): VkDeviceAddressBindingCallbackDataEXT;
    size(): number;
    size(arg0: number): VkDeviceAddressBindingCallbackDataEXT;
    sizeof(): number;
}