import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDebugUtilsObjectNameInfoEXT } from '../../../org/lwjgl/vulkan/VkDebugUtilsObjectNameInfoEXT.d.ts'
import type { VkOpaqueCaptureDescriptorDataCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkOpaqueCaptureDescriptorDataCreateInfoEXT.d.ts'
import type { VkSamplerBlockMatchWindowCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkSamplerBlockMatchWindowCreateInfoQCOM.d.ts'
import type { VkSamplerBorderColorComponentMappingCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerBorderColorComponentMappingCreateInfoEXT.d.ts'
import type { VkSamplerCubicWeightsCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkSamplerCubicWeightsCreateInfoQCOM.d.ts'
import type { VkSamplerCustomBorderColorCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerCustomBorderColorCreateInfoEXT.d.ts'
import type { VkSamplerCustomBorderColorIndexCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerCustomBorderColorIndexCreateInfoEXT.d.ts'
import type { VkSamplerReductionModeCreateInfo } from '../../../org/lwjgl/vulkan/VkSamplerReductionModeCreateInfo.d.ts'
import type { VkSamplerReductionModeCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkSamplerReductionModeCreateInfoEXT.d.ts'
import type { VkSamplerYcbcrConversionInfo } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionInfo.d.ts'
import type { VkSamplerYcbcrConversionInfoKHR } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionInfoKHR.d.ts'
export class VkSamplerCreateInfo extends Struct<VkSamplerCreateInfo> implements NativeResource {
    static ADDRESSMODEU: number;
    static ADDRESSMODEV: number;
    static ADDRESSMODEW: number;
    static ALIGNOF: number;
    static ANISOTROPYENABLE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BORDERCOLOR: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPAREENABLE: number;
    static COMPAREOP: number;
    static FLAGS: number;
    static MAGFILTER: number;
    static MAXANISOTROPY: number;
    static MAXLOD: number;
    static MINFILTER: number;
    static MINLOD: number;
    static MIPLODBIAS: number;
    static MIPMAPMODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static UNNORMALIZEDCOORDINATES: number;
    static calloc(): VkSamplerCreateInfo;
    static calloc(paramarg0: MemoryStack): VkSamplerCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSamplerCreateInfo;
    static create(paramarg0: number): VkSamplerCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSamplerCreateInfo;
    static malloc(paramarg0: MemoryStack): VkSamplerCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static naddressModeU(paramarg0: number): number;
    static naddressModeU(paramarg0: number, paramarg1: number): void;
    static naddressModeV(paramarg0: number): number;
    static naddressModeV(paramarg0: number, paramarg1: number): void;
    static naddressModeW(paramarg0: number): number;
    static naddressModeW(paramarg0: number, paramarg1: number): void;
    static nanisotropyEnable(paramarg0: number): number;
    static nanisotropyEnable(paramarg0: number, paramarg1: number): void;
    static nborderColor(paramarg0: number): number;
    static nborderColor(paramarg0: number, paramarg1: number): void;
    static ncompareEnable(paramarg0: number): number;
    static ncompareEnable(paramarg0: number, paramarg1: number): void;
    static ncompareOp(paramarg0: number): number;
    static ncompareOp(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nmagFilter(paramarg0: number): number;
    static nmagFilter(paramarg0: number, paramarg1: number): void;
    static nmaxAnisotropy(paramarg0: number): number;
    static nmaxAnisotropy(paramarg0: number, paramarg1: number): void;
    static nmaxLod(paramarg0: number): number;
    static nmaxLod(paramarg0: number, paramarg1: number): void;
    static nminFilter(paramarg0: number): number;
    static nminFilter(paramarg0: number, paramarg1: number): void;
    static nminLod(paramarg0: number): number;
    static nminLod(paramarg0: number, paramarg1: number): void;
    static nmipLodBias(paramarg0: number): number;
    static nmipLodBias(paramarg0: number, paramarg1: number): void;
    static nmipmapMode(paramarg0: number): number;
    static nmipmapMode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nunnormalizedCoordinates(paramarg0: number): number;
    static nunnormalizedCoordinates(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    addressModeU(): number;
    addressModeU(arg0: number): VkSamplerCreateInfo;
    addressModeV(): number;
    addressModeV(arg0: number): VkSamplerCreateInfo;
    addressModeW(): number;
    addressModeW(arg0: number): VkSamplerCreateInfo;
    anisotropyEnable(): boolean;
    anisotropyEnable(arg0: boolean): VkSamplerCreateInfo;
    borderColor(): number;
    borderColor(arg0: number): VkSamplerCreateInfo;
    close(): void;
    compareEnable(): boolean;
    compareEnable(arg0: boolean): VkSamplerCreateInfo;
    compareOp(): number;
    compareOp(arg0: number): VkSamplerCreateInfo;
    create(arg0: number, arg1: ByteBuffer): VkSamplerCreateInfo;
    flags(): number;
    flags(arg0: number): VkSamplerCreateInfo;
    magFilter(): number;
    magFilter(arg0: number): VkSamplerCreateInfo;
    maxAnisotropy(): number;
    maxAnisotropy(arg0: number): VkSamplerCreateInfo;
    maxLod(): number;
    maxLod(arg0: number): VkSamplerCreateInfo;
    minFilter(): number;
    minFilter(arg0: number): VkSamplerCreateInfo;
    minLod(): number;
    minLod(arg0: number): VkSamplerCreateInfo;
    mipLodBias(): number;
    mipLodBias(arg0: number): VkSamplerCreateInfo;
    mipmapMode(): number;
    mipmapMode(arg0: number): VkSamplerCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkSamplerCreateInfo;
    pNext(arg0: VkDebugUtilsObjectNameInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkOpaqueCaptureDescriptorDataCreateInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerBlockMatchWindowCreateInfoQCOM): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerBorderColorComponentMappingCreateInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerCubicWeightsCreateInfoQCOM): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerCustomBorderColorCreateInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerCustomBorderColorIndexCreateInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerReductionModeCreateInfo): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerReductionModeCreateInfoEXT): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerYcbcrConversionInfo): VkSamplerCreateInfo;
    pNext(arg0: VkSamplerYcbcrConversionInfoKHR): VkSamplerCreateInfo;
    sType(): number;
    sType(arg0: number): VkSamplerCreateInfo;
    sType$Default(): VkSamplerCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean, arg11: number, arg12: boolean, arg13: number, arg14: number, arg15: number, arg16: number, arg17: boolean): VkSamplerCreateInfo;
    set(arg0: VkSamplerCreateInfo): VkSamplerCreateInfo;
    sizeof(): number;
    unnormalizedCoordinates(): boolean;
    unnormalizedCoordinates(arg0: boolean): VkSamplerCreateInfo;
}