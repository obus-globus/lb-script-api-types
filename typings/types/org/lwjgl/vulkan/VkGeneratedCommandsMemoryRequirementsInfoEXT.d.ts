import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkGeneratedCommandsPipelineInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsPipelineInfoEXT.d.ts'
import type { VkGeneratedCommandsShaderInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsShaderInfoEXT.d.ts'
export class VkGeneratedCommandsMemoryRequirementsInfoEXT extends Struct<VkGeneratedCommandsMemoryRequirementsInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTCOMMANDSLAYOUT: number;
    static INDIRECTEXECUTIONSET: number;
    static MAXDRAWCOUNT: number;
    static MAXSEQUENCECOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static create(paramarg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectCommandsLayout(paramarg0: number): number;
    static nindirectCommandsLayout(paramarg0: number, paramarg1: number): void;
    static nindirectExecutionSet(paramarg0: number): number;
    static nindirectExecutionSet(paramarg0: number, paramarg1: number): void;
    static nmaxDrawCount(paramarg0: number): number;
    static nmaxDrawCount(paramarg0: number, paramarg1: number): void;
    static nmaxSequenceCount(paramarg0: number): number;
    static nmaxSequenceCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    indirectCommandsLayout(): number;
    indirectCommandsLayout(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    indirectExecutionSet(): number;
    indirectExecutionSet(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    maxDrawCount(): number;
    maxDrawCount(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    maxSequenceCount(): number;
    maxSequenceCount(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    pNext(arg0: VkGeneratedCommandsPipelineInfoEXT): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    pNext(arg0: VkGeneratedCommandsShaderInfoEXT): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    sType(): number;
    sType(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    sType$Default(): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    set(arg0: VkGeneratedCommandsMemoryRequirementsInfoEXT): VkGeneratedCommandsMemoryRequirementsInfoEXT;
    sizeof(): number;
}