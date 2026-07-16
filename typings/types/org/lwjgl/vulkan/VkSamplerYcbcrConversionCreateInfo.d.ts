import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkComponentMapping } from '../../../org/lwjgl/vulkan/VkComponentMapping.d.ts'
import type { VkExternalFormatANDROID } from '../../../org/lwjgl/vulkan/VkExternalFormatANDROID.d.ts'
import type { VkSamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM } from '../../../org/lwjgl/vulkan/VkSamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM.d.ts'
export class VkSamplerYcbcrConversionCreateInfo extends Struct<VkSamplerYcbcrConversionCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CHROMAFILTER: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COMPONENTS: number;
    static FORCEEXPLICITRECONSTRUCTION: number;
    static FORMAT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static XCHROMAOFFSET: number;
    static YCBCRMODEL: number;
    static YCBCRRANGE: number;
    static YCHROMAOFFSET: number;
    static calloc(): VkSamplerYcbcrConversionCreateInfo;
    static calloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkSamplerYcbcrConversionCreateInfo;
    static create(paramarg0: number): VkSamplerYcbcrConversionCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkSamplerYcbcrConversionCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkSamplerYcbcrConversionCreateInfo;
    static malloc(paramarg0: MemoryStack): VkSamplerYcbcrConversionCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nchromaFilter(paramarg0: number): number;
    static nchromaFilter(paramarg0: number, paramarg1: number): void;
    static ncomponents(paramarg0: number): VkComponentMapping;
    static ncomponents(paramarg0: number, paramarg1: VkComponentMapping): void;
    static nforceExplicitReconstruction(paramarg0: number): number;
    static nforceExplicitReconstruction(paramarg0: number, paramarg1: number): void;
    static nformat(paramarg0: number): number;
    static nformat(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nxChromaOffset(paramarg0: number): number;
    static nxChromaOffset(paramarg0: number, paramarg1: number): void;
    static nyChromaOffset(paramarg0: number): number;
    static nyChromaOffset(paramarg0: number, paramarg1: number): void;
    static nycbcrModel(paramarg0: number): number;
    static nycbcrModel(paramarg0: number, paramarg1: number): void;
    static nycbcrRange(paramarg0: number): number;
    static nycbcrRange(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    chromaFilter(): number;
    chromaFilter(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    close(): void;
    components(): VkComponentMapping;
    components(arg0: (param0: VkComponentMapping) => void): VkSamplerYcbcrConversionCreateInfo;
    components(arg0: VkComponentMapping): VkSamplerYcbcrConversionCreateInfo;
    create(arg0: number, arg1: ByteBuffer): VkSamplerYcbcrConversionCreateInfo;
    forceExplicitReconstruction(): boolean;
    forceExplicitReconstruction(arg0: boolean): VkSamplerYcbcrConversionCreateInfo;
    format(): number;
    format(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    pNext(arg0: VkExternalFormatANDROID): VkSamplerYcbcrConversionCreateInfo;
    pNext(arg0: VkSamplerYcbcrConversionYcbcrDegammaCreateInfoQCOM): VkSamplerYcbcrConversionCreateInfo;
    sType(): number;
    sType(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    sType$Default(): VkSamplerYcbcrConversionCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: VkComponentMapping, arg6: number, arg7: number, arg8: number, arg9: boolean): VkSamplerYcbcrConversionCreateInfo;
    set(arg0: VkSamplerYcbcrConversionCreateInfo): VkSamplerYcbcrConversionCreateInfo;
    sizeof(): number;
    xChromaOffset(): number;
    xChromaOffset(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    yChromaOffset(): number;
    yChromaOffset(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    ycbcrModel(): number;
    ycbcrModel(arg0: number): VkSamplerYcbcrConversionCreateInfo;
    ycbcrRange(): number;
    ycbcrRange(arg0: number): VkSamplerYcbcrConversionCreateInfo;
}