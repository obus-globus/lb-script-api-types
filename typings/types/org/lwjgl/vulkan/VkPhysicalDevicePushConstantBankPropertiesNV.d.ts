import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePushConstantBankPropertiesNV extends Struct<VkPhysicalDevicePushConstantBankPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXCOMPUTEPUSHCONSTANTBANKS: number;
    static MAXCOMPUTEPUSHDATABANKS: number;
    static MAXGRAPHICSPUSHCONSTANTBANKS: number;
    static MAXGRAPHICSPUSHDATABANKS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePushConstantBankPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePushConstantBankPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePushConstantBankPropertiesNV;
    static create(paramarg0: number): VkPhysicalDevicePushConstantBankPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePushConstantBankPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePushConstantBankPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePushConstantBankPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxComputePushConstantBanks(paramarg0: number): number;
    static nmaxComputePushDataBanks(paramarg0: number): number;
    static nmaxGraphicsPushConstantBanks(paramarg0: number): number;
    static nmaxGraphicsPushDataBanks(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePushConstantBankPropertiesNV;
    maxComputePushConstantBanks(): number;
    maxComputePushDataBanks(): number;
    maxGraphicsPushConstantBanks(): number;
    maxGraphicsPushDataBanks(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePushConstantBankPropertiesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePushConstantBankPropertiesNV;
    sType$Default(): VkPhysicalDevicePushConstantBankPropertiesNV;
    set(arg0: number, arg1: number): VkPhysicalDevicePushConstantBankPropertiesNV;
    set(arg0: VkPhysicalDevicePushConstantBankPropertiesNV): VkPhysicalDevicePushConstantBankPropertiesNV;
    sizeof(): number;
}