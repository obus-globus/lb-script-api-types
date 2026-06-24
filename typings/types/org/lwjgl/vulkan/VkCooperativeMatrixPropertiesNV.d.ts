import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCooperativeMatrixPropertiesNV extends Struct<VkCooperativeMatrixPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static ATYPE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BTYPE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CTYPE: number;
    static DTYPE: number;
    static KSIZE: number;
    static MSIZE: number;
    static NSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCOPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkCooperativeMatrixPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkCooperativeMatrixPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCooperativeMatrixPropertiesNV;
    static create(paramarg0: number): VkCooperativeMatrixPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCooperativeMatrixPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCooperativeMatrixPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkCooperativeMatrixPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nAType(paramarg0: number): number;
    static nBType(paramarg0: number): number;
    static nCType(paramarg0: number): number;
    static nDType(paramarg0: number): number;
    static nKSize(paramarg0: number): number;
    static nMSize(paramarg0: number): number;
    static nNSize(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nscope(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    AType(): number;
    BType(): number;
    CType(): number;
    DType(): number;
    KSize(): number;
    MSize(): number;
    NSize(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCooperativeMatrixPropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkCooperativeMatrixPropertiesNV;
    sType(): number;
    sType(arg0: number): VkCooperativeMatrixPropertiesNV;
    sType$Default(): VkCooperativeMatrixPropertiesNV;
    scope(): number;
    set(arg0: number, arg1: number): VkCooperativeMatrixPropertiesNV;
    set(arg0: VkCooperativeMatrixPropertiesNV): VkCooperativeMatrixPropertiesNV;
    sizeof(): number;
}