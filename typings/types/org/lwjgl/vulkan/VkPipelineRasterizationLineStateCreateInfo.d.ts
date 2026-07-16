import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineRasterizationLineStateCreateInfo extends Struct<VkPipelineRasterizationLineStateCreateInfo> implements NativeResource {
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
    static create(): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineRasterizationLineStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineRasterizationLineStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineRasterizationLineStateCreateInfo;
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
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineRasterizationLineStateCreateInfo;
    lineRasterizationMode(): number;
    lineRasterizationMode(arg0: number): VkPipelineRasterizationLineStateCreateInfo;
    lineStippleFactor(): number;
    lineStippleFactor(arg0: number): VkPipelineRasterizationLineStateCreateInfo;
    lineStipplePattern(): number;
    lineStipplePattern(arg0: number): VkPipelineRasterizationLineStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineRasterizationLineStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineRasterizationLineStateCreateInfo;
    sType$Default(): VkPipelineRasterizationLineStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number): VkPipelineRasterizationLineStateCreateInfo;
    set(arg0: VkPipelineRasterizationLineStateCreateInfo): VkPipelineRasterizationLineStateCreateInfo;
    sizeof(): number;
    stippledLineEnable(): boolean;
    stippledLineEnable(arg0: boolean): VkPipelineRasterizationLineStateCreateInfo;
}