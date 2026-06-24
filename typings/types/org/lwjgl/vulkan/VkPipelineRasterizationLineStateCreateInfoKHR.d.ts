import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineRasterizationLineStateCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineRasterizationLineStateCreateInfo.d.ts'
export class VkPipelineRasterizationLineStateCreateInfoKHR extends VkPipelineRasterizationLineStateCreateInfo {
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
    static calloc(): VkPipelineRasterizationLineStateCreateInfoKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static create(): VkPipelineRasterizationLineStateCreateInfoKHR;
    static create(paramarg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineRasterizationLineStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static malloc(): VkPipelineRasterizationLineStateCreateInfoKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
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
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPipelineRasterizationLineStateCreateInfoKHR;
    lineRasterizationMode(): number;
    lineRasterizationMode(arg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    lineStippleFactor(): number;
    lineStippleFactor(arg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    lineStipplePattern(): number;
    lineStipplePattern(arg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    sType(): number;
    sType(arg0: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    sType$Default(): VkPipelineRasterizationLineStateCreateInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): VkPipelineRasterizationLineStateCreateInfoKHR;
    set(arg0: VkPipelineRasterizationLineStateCreateInfo): VkPipelineRasterizationLineStateCreateInfo;
    set(arg0: VkPipelineRasterizationLineStateCreateInfoKHR): VkPipelineRasterizationLineStateCreateInfoKHR;
    stippledLineEnable(): boolean;
    stippledLineEnable(arg0: boolean): VkPipelineRasterizationLineStateCreateInfoKHR;
}