import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineLayoutCreateInfo } from '../../../org/lwjgl/vulkan/VkPipelineLayoutCreateInfo.d.ts'
import type { VkPushConstantBankInfoNV } from '../../../org/lwjgl/vulkan/VkPushConstantBankInfoNV.d.ts'
export class VkPushConstantsInfo extends Struct<VkPushConstantsInfo> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LAYOUT: number;
    static OFFSET: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVALUES: number;
    static SIZE: number;
    static SIZEOF: number;
    static STAGEFLAGS: number;
    static STYPE: number;
    static calloc(): VkPushConstantsInfo;
    static calloc(paramarg0: MemoryStack): VkPushConstantsInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPushConstantsInfo;
    static create(paramarg0: number): VkPushConstantsInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPushConstantsInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPushConstantsInfo;
    static malloc(paramarg0: MemoryStack): VkPushConstantsInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlayout(paramarg0: number): number;
    static nlayout(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npValues(paramarg0: number): ByteBuffer;
    static npValues(paramarg0: number, paramarg1: ByteBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsize(paramarg0: number): number;
    static nsize(paramarg0: number, paramarg1: number): void;
    static nstageFlags(paramarg0: number): number;
    static nstageFlags(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPushConstantsInfo;
    layout(): number;
    layout(arg0: number): VkPushConstantsInfo;
    offset(): number;
    offset(arg0: number): VkPushConstantsInfo;
    pNext(): number;
    pNext(arg0: number): VkPushConstantsInfo;
    pNext(arg0: VkPipelineLayoutCreateInfo): VkPushConstantsInfo;
    pNext(arg0: VkPushConstantBankInfoNV): VkPushConstantsInfo;
    pValues(): ByteBuffer;
    pValues(arg0: ByteBuffer): VkPushConstantsInfo;
    sType(): number;
    sType(arg0: number): VkPushConstantsInfo;
    sType$Default(): VkPushConstantsInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ByteBuffer): VkPushConstantsInfo;
    set(arg0: VkPushConstantsInfo): VkPushConstantsInfo;
    size(): number;
    sizeof(): number;
    stageFlags(): number;
    stageFlags(arg0: number): VkPushConstantsInfo;
}