import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageViewCreateInfo } from '../../../org/lwjgl/vulkan/VkImageViewCreateInfo.d.ts'
export class VkImageDescriptorInfoEXT extends Struct<VkImageDescriptorInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYOUT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEW: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkImageDescriptorInfoEXT;
    static calloc(paramarg0: MemoryStack): VkImageDescriptorInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkImageDescriptorInfoEXT;
    static create(paramarg0: number): VkImageDescriptorInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkImageDescriptorInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkImageDescriptorInfoEXT;
    static malloc(paramarg0: MemoryStack): VkImageDescriptorInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npView(paramarg0: number): VkImageViewCreateInfo;
    static npView(paramarg0: number, paramarg1: VkImageViewCreateInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkImageDescriptorInfoEXT;
    layout(): number;
    layout(arg0: number): VkImageDescriptorInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkImageDescriptorInfoEXT;
    pView(): VkImageViewCreateInfo;
    pView(arg0: VkImageViewCreateInfo): VkImageDescriptorInfoEXT;
    sType(): number;
    sType(arg0: number): VkImageDescriptorInfoEXT;
    sType$Default(): VkImageDescriptorInfoEXT;
    set(arg0: number, arg1: number, arg2: VkImageViewCreateInfo, arg3: number): VkImageDescriptorInfoEXT;
    set(arg0: VkImageDescriptorInfoEXT): VkImageDescriptorInfoEXT;
    sizeof(): number;
}