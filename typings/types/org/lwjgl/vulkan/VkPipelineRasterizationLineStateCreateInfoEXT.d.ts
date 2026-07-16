import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineRasterizationLineStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationLineStateCreateInfo.d.ts'
export class VkPipelineRasterizationLineStateCreateInfoEXT extends VkPipelineRasterizationLineStateCreateInfo {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LINERASTERIZATIONMODE: number;
    static LINESTIPPLEFACTOR: number;
    static LINESTIPPLEPATTERN: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STIPPLEDLINEENABLE: number;
    static STYPE: number;
    static calloc(): VkPipelineRasterizationLineStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static calloc(): VkPipelineRasterizationLineStateCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfoEXT;
    static create(): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineRasterizationLineStateCreateInfoEXT;
    static create(paramarg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    static createSafe(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    static malloc(): VkPipelineRasterizationLineStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineRasterizationLineStateCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfoEXT;
    static nlineRasterizationMode(paramarg0: number): number;
    static nlineRasterizationMode(paramarg0: number, paramarg1: number): void;
    static nlineStippleFactor(paramarg0: number): number;
    static nlineStippleFactor(paramarg0: number, paramarg1: number): void;
    static nlineStipplePattern(paramarg0: number): number;
    static nlineStipplePattern(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstippledLineEnable(paramarg0: number): number;
    static nstippledLineEnable(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineRasterizationLineStateCreateInfoEXT;
    lineRasterizationMode(): number;
    lineRasterizationMode(arg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    lineStippleFactor(): number;
    lineStippleFactor(arg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    lineStipplePattern(): number;
    lineStipplePattern(arg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    sType$Default(): VkPipelineRasterizationLineStateCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): VkPipelineRasterizationLineStateCreateInfoEXT;
    set(arg0: VkPipelineRasterizationLineStateCreateInfo): VkPipelineRasterizationLineStateCreateInfo;
    set(arg0: VkPipelineRasterizationLineStateCreateInfoEXT): VkPipelineRasterizationLineStateCreateInfoEXT;
    stippledLineEnable(): boolean;
    stippledLineEnable(arg0: boolean): VkPipelineRasterizationLineStateCreateInfoEXT;
}