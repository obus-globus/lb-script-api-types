import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCooperativeMatrixFlexibleDimensionsPropertiesNV extends Struct<VkCooperativeMatrixFlexibleDimensionsPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static ATYPE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BTYPE: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CTYPE: number;
    static KGRANULARITY: number;
    static MGRANULARITY: number;
    static NGRANULARITY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESULTTYPE: number;
    static SATURATINGACCUMULATION: number;
    static SCOPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static WORKGROUPINVOCATIONS: number;
    static calloc(): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static create(paramarg0: number): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nAType(paramarg0: number): number;
    static nBType(paramarg0: number): number;
    static nCType(paramarg0: number): number;
    static nKGranularity(paramarg0: number): number;
    static nMGranularity(paramarg0: number): number;
    static nNGranularity(paramarg0: number): number;
    static nResultType(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsaturatingAccumulation(paramarg0: number): number;
    static nscope(paramarg0: number): number;
    static nworkgroupInvocations(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    AType(): number;
    BType(): number;
    CType(): number;
    KGranularity(): number;
    MGranularity(): number;
    NGranularity(): number;
    ResultType(): number;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    sType(): number;
    sType(arg0: number): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    sType$Default(): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    saturatingAccumulation(): boolean;
    scope(): number;
    set(arg0: number, arg1: number): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    set(arg0: VkCooperativeMatrixFlexibleDimensionsPropertiesNV): VkCooperativeMatrixFlexibleDimensionsPropertiesNV;
    sizeof(): number;
    workgroupInvocations(): number;
}