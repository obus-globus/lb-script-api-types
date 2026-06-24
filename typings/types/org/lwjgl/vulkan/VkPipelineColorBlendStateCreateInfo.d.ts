import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineColorBlendAdvancedStateCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineColorBlendAdvancedStateCreateInfoEXT.d.ts'
import type { VkPipelineColorWriteCreateInfoEXT } from '../../../org/lwjgl/vulkan/VkPipelineColorWriteCreateInfoEXT.d.ts'
export class VkPipelineColorBlendStateCreateInfo extends Struct<VkPipelineColorBlendStateCreateInfo> implements NativeResource {
    static ALIGNOF: number;
    static ATTACHMENTCOUNT: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static BLENDCONSTANTS: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static LOGICOP: number;
    static LOGICOPENABLE: number;
    static PATTACHMENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineColorBlendStateCreateInfo;
    static calloc(paramarg0: MemoryStack): VkPipelineColorBlendStateCreateInfo;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineColorBlendStateCreateInfo;
    static create(paramarg0: number): VkPipelineColorBlendStateCreateInfo;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineColorBlendStateCreateInfo;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineColorBlendStateCreateInfo;
    static malloc(paramarg0: MemoryStack): VkPipelineColorBlendStateCreateInfo;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nattachmentCount(paramarg0: number): number;
    static nattachmentCount(paramarg0: number, paramarg1: number): void;
    static nblendConstants(paramarg0: number, paramarg1: number): number;
    static nblendConstants(paramarg0: number): FloatBuffer;
    static nblendConstants(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nblendConstants(paramarg0: number, paramarg1: FloatBuffer): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static nlogicOp(paramarg0: number): number;
    static nlogicOp(paramarg0: number, paramarg1: number): void;
    static nlogicOpEnable(paramarg0: number): number;
    static nlogicOpEnable(paramarg0: number, paramarg1: number): void;
    static npAttachments(paramarg0: number): (Object | null)[];
    static npAttachments(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    attachmentCount(): number;
    attachmentCount(arg0: number): VkPipelineColorBlendStateCreateInfo;
    blendConstants(): FloatBuffer;
    blendConstants(arg0: FloatBuffer): VkPipelineColorBlendStateCreateInfo;
    blendConstants(arg0: number): number;
    blendConstants(arg0: number, arg1: number): VkPipelineColorBlendStateCreateInfo;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineColorBlendStateCreateInfo;
    flags(): number;
    flags(arg0: number): VkPipelineColorBlendStateCreateInfo;
    logicOp(): number;
    logicOp(arg0: number): VkPipelineColorBlendStateCreateInfo;
    logicOpEnable(): boolean;
    logicOpEnable(arg0: boolean): VkPipelineColorBlendStateCreateInfo;
    pAttachments(): (Object | null)[];
    pAttachments(arg0: (Object | null)[]): VkPipelineColorBlendStateCreateInfo;
    pNext(): number;
    pNext(arg0: number): VkPipelineColorBlendStateCreateInfo;
    pNext(arg0: VkPipelineColorBlendAdvancedStateCreateInfoEXT): VkPipelineColorBlendStateCreateInfo;
    pNext(arg0: VkPipelineColorWriteCreateInfoEXT): VkPipelineColorBlendStateCreateInfo;
    sType(): number;
    sType(arg0: number): VkPipelineColorBlendStateCreateInfo;
    sType$Default(): VkPipelineColorBlendStateCreateInfo;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: number, arg6: (Object | null)[], arg7: FloatBuffer): VkPipelineColorBlendStateCreateInfo;
    set(arg0: VkPipelineColorBlendStateCreateInfo): VkPipelineColorBlendStateCreateInfo;
    sizeof(): number;
}