import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkDeviceOrHostAddressConstKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressConstKHR.d.ts'
import type { VkDeviceOrHostAddressKHR } from '../../../org/lwjgl/vulkan/VkDeviceOrHostAddressKHR.d.ts'
export class VkConvertCooperativeVectorMatrixInfoNV extends Struct<VkConvertCooperativeVectorMatrixInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DSTCOMPONENTTYPE: number;
    static DSTDATA: number;
    static DSTLAYOUT: number;
    static DSTSTRIDE: number;
    static NUMCOLUMNS: number;
    static NUMROWS: number;
    static PDSTSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SRCCOMPONENTTYPE: number;
    static SRCDATA: number;
    static SRCLAYOUT: number;
    static SRCSIZE: number;
    static SRCSTRIDE: number;
    static STYPE: number;
    static calloc(): VkConvertCooperativeVectorMatrixInfoNV;
    static calloc(paramarg0: MemoryStack): VkConvertCooperativeVectorMatrixInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkConvertCooperativeVectorMatrixInfoNV;
    static create(paramarg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkConvertCooperativeVectorMatrixInfoNV;
    static malloc(paramarg0: MemoryStack): VkConvertCooperativeVectorMatrixInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndstComponentType(paramarg0: number): number;
    static ndstComponentType(paramarg0: number, paramarg1: number): void;
    static ndstData(paramarg0: number): VkDeviceOrHostAddressKHR;
    static ndstData(paramarg0: number, paramarg1: VkDeviceOrHostAddressKHR): void;
    static ndstLayout(paramarg0: number): number;
    static ndstLayout(paramarg0: number, paramarg1: number): void;
    static ndstStride(paramarg0: number): number;
    static ndstStride(paramarg0: number, paramarg1: number): void;
    static nnumColumns(paramarg0: number): number;
    static nnumColumns(paramarg0: number, paramarg1: number): void;
    static nnumRows(paramarg0: number): number;
    static nnumRows(paramarg0: number, paramarg1: number): void;
    static npDstSize(paramarg0: number, paramarg1: number): PointerBuffer;
    static npDstSize(paramarg0: number, paramarg1: PointerBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsrcComponentType(paramarg0: number): number;
    static nsrcComponentType(paramarg0: number, paramarg1: number): void;
    static nsrcData(paramarg0: number): VkDeviceOrHostAddressConstKHR;
    static nsrcData(paramarg0: number, paramarg1: VkDeviceOrHostAddressConstKHR): void;
    static nsrcLayout(paramarg0: number): number;
    static nsrcLayout(paramarg0: number, paramarg1: number): void;
    static nsrcSize(paramarg0: number): number;
    static nsrcSize(paramarg0: number, paramarg1: number): void;
    static nsrcStride(paramarg0: number): number;
    static nsrcStride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkConvertCooperativeVectorMatrixInfoNV;
    dstComponentType(): number;
    dstComponentType(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    dstData(): VkDeviceOrHostAddressKHR;
    dstData(arg0: (param0: VkDeviceOrHostAddressKHR) => void): VkConvertCooperativeVectorMatrixInfoNV;
    dstData(arg0: VkDeviceOrHostAddressKHR): VkConvertCooperativeVectorMatrixInfoNV;
    dstLayout(): number;
    dstLayout(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    dstStride(): number;
    dstStride(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    numColumns(): number;
    numColumns(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    numRows(): number;
    numRows(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    pDstSize(arg0: number): PointerBuffer;
    pDstSize(arg0: PointerBuffer): VkConvertCooperativeVectorMatrixInfoNV;
    pNext(): number;
    pNext(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    sType(): number;
    sType(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    sType$Default(): VkConvertCooperativeVectorMatrixInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: VkDeviceOrHostAddressConstKHR, arg4: PointerBuffer, arg5: VkDeviceOrHostAddressKHR, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number): VkConvertCooperativeVectorMatrixInfoNV;
    set(arg0: VkConvertCooperativeVectorMatrixInfoNV): VkConvertCooperativeVectorMatrixInfoNV;
    sizeof(): number;
    srcComponentType(): number;
    srcComponentType(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    srcData(): VkDeviceOrHostAddressConstKHR;
    srcData(arg0: (param0: VkDeviceOrHostAddressConstKHR) => void): VkConvertCooperativeVectorMatrixInfoNV;
    srcData(arg0: VkDeviceOrHostAddressConstKHR): VkConvertCooperativeVectorMatrixInfoNV;
    srcLayout(): number;
    srcLayout(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    srcSize(): number;
    srcSize(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
    srcStride(): number;
    srcStride(arg0: number): VkConvertCooperativeVectorMatrixInfoNV;
}