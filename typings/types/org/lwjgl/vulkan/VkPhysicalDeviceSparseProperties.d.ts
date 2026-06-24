import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceSparseProperties extends Struct<VkPhysicalDeviceSparseProperties> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESIDENCYALIGNEDMIPSIZE: number;
    static RESIDENCYNONRESIDENTSTRICT: number;
    static RESIDENCYSTANDARD2DBLOCKSHAPE: number;
    static RESIDENCYSTANDARD2DMULTISAMPLEBLOCKSHAPE: number;
    static RESIDENCYSTANDARD3DBLOCKSHAPE: number;
    static SIZEOF: number;
    static create(paramarg0: number): VkPhysicalDeviceSparseProperties;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSparseProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nresidencyAlignedMipSize(paramarg0: number): number;
    static nresidencyNonResidentStrict(paramarg0: number): number;
    static nresidencyStandard2DBlockShape(paramarg0: number): number;
    static nresidencyStandard2DMultisampleBlockShape(paramarg0: number): number;
    static nresidencyStandard3DBlockShape(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSparseProperties;
    residencyAlignedMipSize(): boolean;
    residencyNonResidentStrict(): boolean;
    residencyStandard2DBlockShape(): boolean;
    residencyStandard2DMultisampleBlockShape(): boolean;
    residencyStandard3DBlockShape(): boolean;
    sizeof(): number;
}