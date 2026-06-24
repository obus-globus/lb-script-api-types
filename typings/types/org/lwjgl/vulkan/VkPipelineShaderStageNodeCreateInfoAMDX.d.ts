import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineShaderStageNodeCreateInfoAMDX extends Struct<VkPipelineShaderStageNodeCreateInfoAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEX: number;
    static PNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineShaderStageNodeCreateInfoAMDX;
    static calloc(paramarg0: MemoryStack): VkPipelineShaderStageNodeCreateInfoAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineShaderStageNodeCreateInfoAMDX;
    static create(paramarg0: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineShaderStageNodeCreateInfoAMDX;
    static malloc(paramarg0: MemoryStack): VkPipelineShaderStageNodeCreateInfoAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindex(paramarg0: number): number;
    static nindex(paramarg0: number, paramarg1: number): void;
    static npName(paramarg0: number): ByteBuffer;
    static npName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineShaderStageNodeCreateInfoAMDX;
    index(): number;
    index(arg0: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    pName(): ByteBuffer;
    pName(arg0: ByteBuffer): VkPipelineShaderStageNodeCreateInfoAMDX;
    pNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    sType(): number;
    sType(arg0: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    sType$Default(): VkPipelineShaderStageNodeCreateInfoAMDX;
    set(arg0: number, arg1: number, arg2: ByteBuffer, arg3: number): VkPipelineShaderStageNodeCreateInfoAMDX;
    set(arg0: VkPipelineShaderStageNodeCreateInfoAMDX): VkPipelineShaderStageNodeCreateInfoAMDX;
    sizeof(): number;
}