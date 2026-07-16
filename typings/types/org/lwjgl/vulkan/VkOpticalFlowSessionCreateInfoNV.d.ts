import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkOpticalFlowSessionCreatePrivateDataInfoNV } from '../../../org/lwjgl/vulkan/VkOpticalFlowSessionCreatePrivateDataInfoNV.d.ts'
export class VkOpticalFlowSessionCreateInfoNV extends Struct<VkOpticalFlowSessionCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COSTFORMAT: number;
    static FLAGS: number;
    static FLOWVECTORFORMAT: number;
    static HEIGHT: number;
    static HINTGRIDSIZE: number;
    static IMAGEFORMAT: number;
    static OUTPUTGRIDSIZE: number;
    static PERFORMANCELEVEL: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static WIDTH: number;
    static calloc(): VkOpticalFlowSessionCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkOpticalFlowSessionCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkOpticalFlowSessionCreateInfoNV;
    static create(paramarg0: number): VkOpticalFlowSessionCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkOpticalFlowSessionCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkOpticalFlowSessionCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkOpticalFlowSessionCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncostFormat(paramarg0: number): number;
    static ncostFormat(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nflowVectorFormat(paramarg0: number): number;
    static nflowVectorFormat(paramarg0: number, paramarg1: number): void;
    static nheight(paramarg0: number): number;
    static nheight(paramarg0: number, paramarg1: number): void;
    static nhintGridSize(paramarg0: number): number;
    static nhintGridSize(paramarg0: number, paramarg1: number): void;
    static nimageFormat(paramarg0: number): number;
    static nimageFormat(paramarg0: number, paramarg1: number): void;
    static noutputGridSize(paramarg0: number): number;
    static noutputGridSize(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nperformanceLevel(paramarg0: number): number;
    static nperformanceLevel(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nwidth(paramarg0: number): number;
    static nwidth(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    costFormat(): number;
    costFormat(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkOpticalFlowSessionCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    flowVectorFormat(): number;
    flowVectorFormat(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    height(): number;
    height(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    hintGridSize(): number;
    hintGridSize(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    imageFormat(): number;
    imageFormat(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    outputGridSize(): number;
    outputGridSize(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    pNext(arg0: VkOpticalFlowSessionCreatePrivateDataInfoNV): VkOpticalFlowSessionCreateInfoNV;
    performanceLevel(): number;
    performanceLevel(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkOpticalFlowSessionCreateInfoNV;
    sType$Default(): VkOpticalFlowSessionCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): VkOpticalFlowSessionCreateInfoNV;
    set(arg0: VkOpticalFlowSessionCreateInfoNV): VkOpticalFlowSessionCreateInfoNV;
    sizeof(): number;
    width(): number;
    width(arg0: number): VkOpticalFlowSessionCreateInfoNV;
}