import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkShaderResourceUsageAMD extends Struct<VkShaderResourceUsageAMD> {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LDSSIZEPERLOCALWORKGROUP: number;
    static LDSUSAGESIZEINBYTES: number;
    static NUMUSEDSGPRS: number;
    static NUMUSEDVGPRS: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SCRATCHMEMUSAGEINBYTES: number;
    static SIZEOF: number;
    static create(paramarg0: number): VkShaderResourceUsageAMD;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkShaderResourceUsageAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nldsSizePerLocalWorkGroup(paramarg0: number): number;
    static nldsUsageSizeInBytes(paramarg0: number): number;
    static nnumUsedSgprs(paramarg0: number): number;
    static nnumUsedVgprs(paramarg0: number): number;
    static nscratchMemUsageInBytes(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    create(arg0: number, arg1: ByteBuffer): VkShaderResourceUsageAMD;
    ldsSizePerLocalWorkGroup(): number;
    ldsUsageSizeInBytes(): number;
    numUsedSgprs(): number;
    numUsedVgprs(): number;
    scratchMemUsageInBytes(): number;
    sizeof(): number;
}