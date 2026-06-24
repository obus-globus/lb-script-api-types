import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDescriptorDataEXT } from '../../../org/lwjgl/vulkan/VkDescriptorDataEXT.d.ts'
import type { VkDescriptorGetTensorInfoARM } from '../../../org/lwjgl/vulkan/VkDescriptorGetTensorInfoARM.d.ts'
export class VkDescriptorGetInfoEXT extends Struct<VkDescriptorGetInfoEXT> implements NativeResource {
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
    static calloc(): VkDescriptorGetInfoEXT;
    static calloc(paramarg0: MemoryStack): VkDescriptorGetInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDescriptorGetInfoEXT;
    static create(paramarg0: number): VkDescriptorGetInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDescriptorGetInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDescriptorGetInfoEXT;
    static malloc(paramarg0: MemoryStack): VkDescriptorGetInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndata(paramarg0: number): VkDescriptorDataEXT;
    static ndata(paramarg0: number, paramarg1: VkDescriptorDataEXT): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDescriptorGetInfoEXT;
    data(): VkDescriptorDataEXT;
    data(arg0: (param0: VkDescriptorDataEXT) => void): VkDescriptorGetInfoEXT;
    data(arg0: VkDescriptorDataEXT): VkDescriptorGetInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkDescriptorGetInfoEXT;
    pNext(arg0: VkDescriptorGetTensorInfoARM): VkDescriptorGetInfoEXT;
    sType(): number;
    sType(arg0: number): VkDescriptorGetInfoEXT;
    sType$Default(): VkDescriptorGetInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDescriptorDataEXT): VkDescriptorGetInfoEXT;
    set(arg0: VkDescriptorGetInfoEXT): VkDescriptorGetInfoEXT;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkDescriptorGetInfoEXT;
}