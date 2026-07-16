import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkBufferUsageFlags2CreateInfo } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfo.d.ts'
import type { VkBufferUsageFlags2CreateInfoKHR } from '../../../org/lwjgl/vulkan/VkBufferUsageFlags2CreateInfoKHR.d.ts'
import type { VkExportMetalObjectCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkExportMetalObjectCreateInfoEXT.d.ts'
export class VkBufferViewCreateInfo extends Struct<VkBufferViewCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BUFFER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static FORMAT: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RANGE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkBufferViewCreateInfo;
    static calloc(paramarg0: MemoryStack): VkBufferViewCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkBufferViewCreateInfo;
    static create(paramarg0: number): VkBufferViewCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkBufferViewCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkBufferViewCreateInfo;
    static malloc(paramarg0: MemoryStack): VkBufferViewCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbuffer(paramarg0: number): number;
    static nbuffer(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nrange(paramarg0: number): number;
    static nrange(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    buffer(): number;
    buffer(arg0: number): VkBufferViewCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkBufferViewCreateInfo;
    flags(): number;
    flags(arg0: number): VkBufferViewCreateInfo;
    format(): number;
    format(arg0: number): VkBufferViewCreateInfo;
    offset(): number;
    offset(arg0: number): VkBufferViewCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkBufferViewCreateInfo;
    pNext(arg0: VkBufferUsageFlags2CreateInfo): VkBufferViewCreateInfo;
    pNext(arg0: VkBufferUsageFlags2CreateInfoKHR): VkBufferViewCreateInfo;
    pNext(arg0: VkExportMetalObjectCreateInfoEXT): VkBufferViewCreateInfo;
    range(): number;
    range(arg0: number): VkBufferViewCreateInfo;
    sType(): number;
    sType(arg0: number): VkBufferViewCreateInfo;
    sType$Default(): VkBufferViewCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): VkBufferViewCreateInfo;
    set(arg0: VkBufferViewCreateInfo): VkBufferViewCreateInfo;
    sizeof(): number;
}