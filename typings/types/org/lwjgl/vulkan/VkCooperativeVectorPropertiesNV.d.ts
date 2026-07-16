import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkCooperativeVectorPropertiesNV extends Struct<VkCooperativeVectorPropertiesNV> implements NativeResource {
    static ALIGNOF: number;
    static BIASINTERPRETATION: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INPUTINTERPRETATION: number;
    static INPUTTYPE: number;
    static MATRIXINTERPRETATION: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static RESULTTYPE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TRANSPOSE: number;
    static calloc(): VkCooperativeVectorPropertiesNV;
    static calloc(paramarg0: MemoryStack): VkCooperativeVectorPropertiesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkCooperativeVectorPropertiesNV;
    static create(paramarg0: number): VkCooperativeVectorPropertiesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkCooperativeVectorPropertiesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkCooperativeVectorPropertiesNV;
    static malloc(paramarg0: MemoryStack): VkCooperativeVectorPropertiesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nbiasInterpretation(paramarg0: number): number;
    static nbiasInterpretation(paramarg0: number, paramarg1: number): void;
    static ninputInterpretation(paramarg0: number): number;
    static ninputInterpretation(paramarg0: number, paramarg1: number): void;
    static ninputType(paramarg0: number): number;
    static ninputType(paramarg0: number, paramarg1: number): void;
    static nmatrixInterpretation(paramarg0: number): number;
    static nmatrixInterpretation(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nresultType(paramarg0: number): number;
    static nresultType(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntranspose(paramarg0: number): number;
    static ntranspose(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    biasInterpretation(): number;
    biasInterpretation(arg0: number): VkCooperativeVectorPropertiesNV;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkCooperativeVectorPropertiesNV;
    inputInterpretation(): number;
    inputInterpretation(arg0: number): VkCooperativeVectorPropertiesNV;
    inputType(): number;
    inputType(arg0: number): VkCooperativeVectorPropertiesNV;
    matrixInterpretation(): number;
    matrixInterpretation(arg0: number): VkCooperativeVectorPropertiesNV;
    pNext(): number;
    pNext(arg0: number): VkCooperativeVectorPropertiesNV;
    resultType(): number;
    resultType(arg0: number): VkCooperativeVectorPropertiesNV;
    sType(): number;
    sType(arg0: number): VkCooperativeVectorPropertiesNV;
    sType$Default(): VkCooperativeVectorPropertiesNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean): VkCooperativeVectorPropertiesNV;
    set(arg0: VkCooperativeVectorPropertiesNV): VkCooperativeVectorPropertiesNV;
    sizeof(): number;
    transpose(): boolean;
    transpose(arg0: boolean): VkCooperativeVectorPropertiesNV;
}