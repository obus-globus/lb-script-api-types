import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineExecutableStatisticValueKHR extends Struct<VkPipelineExecutableStatisticValueKHR> {
    static ALIGNOF: number;
    static B32: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static F64: number;
    static I64: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static U64: number;
    static create(paramarg0: number): VkPipelineExecutableStatisticValueKHR;
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineExecutableStatisticValueKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static nb32(paramarg0: number): number;
    static nf64(paramarg0: number): number;
    static ni64(paramarg0: number): number;
    static nu64(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    b32(): boolean;
    create(arg0: number, arg1: ByteBuffer): VkPipelineExecutableStatisticValueKHR;
    f64(): number;
    i64(): number;
    sizeof(): number;
    u64(): number;
}