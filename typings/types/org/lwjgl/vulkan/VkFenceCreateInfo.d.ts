import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExportFenceCreateInfo } from '../../../org/lwjgl/vulkan/VkExportFenceCreateInfo.d.ts'
import type { VkExportFenceCreateInfoKHR } from '../../../org/lwjgl/vulkan/VkExportFenceCreateInfoKHR.d.ts'
import type { VkExportFenceWin32HandleInfoKHR } from '../../../org/lwjgl/vulkan/VkExportFenceWin32HandleInfoKHR.d.ts'
export class VkFenceCreateInfo extends Struct<VkFenceCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkFenceCreateInfo;
    static calloc(paramarg0: MemoryStack): VkFenceCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkFenceCreateInfo;
    static create(paramarg0: number): VkFenceCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkFenceCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkFenceCreateInfo;
    static malloc(paramarg0: MemoryStack): VkFenceCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkFenceCreateInfo;
    flags(): number;
    flags(arg0: number): VkFenceCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkFenceCreateInfo;
    pNext(arg0: VkExportFenceCreateInfo): VkFenceCreateInfo;
    pNext(arg0: VkExportFenceCreateInfoKHR): VkFenceCreateInfo;
    pNext(arg0: VkExportFenceWin32HandleInfoKHR): VkFenceCreateInfo;
    sType(): number;
    sType(arg0: number): VkFenceCreateInfo;
    sType$Default(): VkFenceCreateInfo;
    set(arg0: number, arg1: number, arg2: number): VkFenceCreateInfo;
    set(arg0: VkFenceCreateInfo): VkFenceCreateInfo;
    sizeof(): number;
}