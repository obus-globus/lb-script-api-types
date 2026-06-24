import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkImageCreateInfo } from '../../../org/lwjgl/vulkan/VkImageCreateInfo.d.ts'
import type { VkImageSubresource2 } from '../../../org/lwjgl/vulkan/VkImageSubresource2.d.ts'
export class VkDeviceImageSubresourceInfo extends Struct<VkDeviceImageSubresourceInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PCREATEINFO: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSUBRESOURCE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDeviceImageSubresourceInfo;
    static calloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDeviceImageSubresourceInfo;
    static create(paramarg0: number): VkDeviceImageSubresourceInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDeviceImageSubresourceInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDeviceImageSubresourceInfo;
    static malloc(paramarg0: MemoryStack): VkDeviceImageSubresourceInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npCreateInfo(paramarg0: number): VkImageCreateInfo;
    static npCreateInfo(paramarg0: number, paramarg1: VkImageCreateInfo): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSubresource(paramarg0: number): VkImageSubresource2;
    static npSubresource(paramarg0: number, paramarg1: VkImageSubresource2): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDeviceImageSubresourceInfo;
    pCreateInfo(): VkImageCreateInfo;
    pCreateInfo(arg0: VkImageCreateInfo): VkDeviceImageSubresourceInfo;
    pNext(): number;
    pNext(arg0: number): VkDeviceImageSubresourceInfo;
    pSubresource(): VkImageSubresource2;
    pSubresource(arg0: VkImageSubresource2): VkDeviceImageSubresourceInfo;
    sType(): number;
    sType(arg0: number): VkDeviceImageSubresourceInfo;
    sType$Default(): VkDeviceImageSubresourceInfo;
    set(arg0: number, arg1: number, arg2: VkImageCreateInfo, arg3: VkImageSubresource2): VkDeviceImageSubresourceInfo;
    set(arg0: VkDeviceImageSubresourceInfo): VkDeviceImageSubresourceInfo;
    sizeof(): number;
}