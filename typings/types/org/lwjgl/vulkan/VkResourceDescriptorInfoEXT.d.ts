import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDebugUtilsObjectNameInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsObjectNameInfoEXT.d.ts'
import type { VkResourceDescriptorDataEXT } from '../../../org/lwjgl/vulkan/VkResourceDescriptorDataEXT.d.ts'
export class VkResourceDescriptorInfoEXT extends Struct<VkResourceDescriptorInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TYPE: number;
    static calloc(): VkResourceDescriptorInfoEXT;
    static calloc(paramarg0: MemoryStack): VkResourceDescriptorInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkResourceDescriptorInfoEXT;
    static create(paramarg0: number): VkResourceDescriptorInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkResourceDescriptorInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkResourceDescriptorInfoEXT;
    static malloc(paramarg0: MemoryStack): VkResourceDescriptorInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkResourceDescriptorDataEXT;
    static ndata(paramarg0: number, paramarg1: VkResourceDescriptorDataEXT): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkResourceDescriptorInfoEXT;
    data(): VkResourceDescriptorDataEXT;
    data(arg0: (param0: VkResourceDescriptorDataEXT) => void): VkResourceDescriptorInfoEXT;
    data(arg0: VkResourceDescriptorDataEXT): VkResourceDescriptorInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkResourceDescriptorInfoEXT;
    pNext(arg0: VkDebugUtilsObjectNameInfoEXT): VkResourceDescriptorInfoEXT;
    sType(): number;
    sType(arg0: number): VkResourceDescriptorInfoEXT;
    sType$Default(): VkResourceDescriptorInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkResourceDescriptorDataEXT): VkResourceDescriptorInfoEXT;
    set(arg0: VkResourceDescriptorInfoEXT): VkResourceDescriptorInfoEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkResourceDescriptorInfoEXT;
}