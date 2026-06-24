import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkSpecializationInfo } from '../../../org/lwjgl/vulkan/VkSpecializationInfo.d.ts'
export class VkDataGraphPipelineShaderModuleCreateInfoARM extends Struct<VkDataGraphPipelineShaderModuleCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CONSTANTCOUNT: number;
    static MODULE: number;
    static PCONSTANTS: number;
    static PNAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSPECIALIZATIONINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineShaderModuleCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nconstantCount(paramarg0: number): number;
    static nconstantCount(paramarg0: number, paramarg1: number): void;
    static nmodule(paramarg0: number): number;
    static nmodule(paramarg0: number, paramarg1: number): void;
    static npConstants(paramarg0: number): (Object | null)[];
    static npConstants(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npName(paramarg0: number): ByteBuffer;
    static npName(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSpecializationInfo(paramarg0: number): VkSpecializationInfo;
    static npSpecializationInfo(paramarg0: number, paramarg1: VkSpecializationInfo): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    constantCount(): number;
    constantCount(arg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineShaderModuleCreateInfoARM;
    module(): number;
    module(arg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    pConstants(): (Object | null)[];
    pConstants(arg0: (Object | null)[]): VkDataGraphPipelineShaderModuleCreateInfoARM;
    pName(): ByteBuffer;
    pName(arg0: ByteBuffer): VkDataGraphPipelineShaderModuleCreateInfoARM;
    pNameString(): string;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    pSpecializationInfo(): VkSpecializationInfo;
    pSpecializationInfo(arg0: VkSpecializationInfo): VkDataGraphPipelineShaderModuleCreateInfoARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineShaderModuleCreateInfoARM;
    sType$Default(): VkDataGraphPipelineShaderModuleCreateInfoARM;
    set(arg0: number, arg1: number, arg2: number, arg3: ByteBuffer, arg4: VkSpecializationInfo, arg5: number, arg6: (Object | null)[]): VkDataGraphPipelineShaderModuleCreateInfoARM;
    set(arg0: VkDataGraphPipelineShaderModuleCreateInfoARM): VkDataGraphPipelineShaderModuleCreateInfoARM;
    sizeof(): number;
}