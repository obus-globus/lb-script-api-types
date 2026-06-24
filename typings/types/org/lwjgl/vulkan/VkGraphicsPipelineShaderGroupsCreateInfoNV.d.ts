import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkGraphicsPipelineShaderGroupsCreateInfoNV extends Struct<VkGraphicsPipelineShaderGroupsCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static GROUPCOUNT: number;
    static PGROUPS: number;
    static PIPELINECOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPIPELINES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static create(paramarg0: number): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ngroupCount(paramarg0: number): number;
    static ngroupCount(paramarg0: number, paramarg1: number): void;
    static npGroups(paramarg0: number): (Object | null)[];
    static npGroups(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPipelines(paramarg0: number): LongBuffer;
    static npPipelines(paramarg0: number, paramarg1: LongBuffer): void;
    static npipelineCount(paramarg0: number): number;
    static npipelineCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    groupCount(): number;
    pGroups(): (Object | null)[];
    pGroups(arg0: (Object | null)[]): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    pPipelines(): LongBuffer;
    pPipelines(arg0: LongBuffer): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    pipelineCount(): number;
    sType(): number;
    sType(arg0: number): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    sType$Default(): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    set(arg0: number, arg1: number, arg2: (Object | null)[], arg3: LongBuffer): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    set(arg0: VkGraphicsPipelineShaderGroupsCreateInfoNV): VkGraphicsPipelineShaderGroupsCreateInfoNV;
    sizeof(): number;
}