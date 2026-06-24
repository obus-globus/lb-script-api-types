import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkGeneratedCommandsMemoryRequirementsInfoNV extends Struct<VkGeneratedCommandsMemoryRequirementsInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTCOMMANDSLAYOUT: number;
    static MAXSEQUENCESCOUNT: number;
    static PIPELINE: number;
    static PIPELINEBINDPOINT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static calloc(paramarg0: MemoryStack): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static create(paramarg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static malloc(paramarg0: MemoryStack): VkGeneratedCommandsMemoryRequirementsInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectCommandsLayout(paramarg0: number): number;
    static nindirectCommandsLayout(paramarg0: number, paramarg1: number): void;
    static nmaxSequencesCount(paramarg0: number): number;
    static nmaxSequencesCount(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npipeline(paramarg0: number): number;
    static npipeline(paramarg0: number, paramarg1: number): void;
    static npipelineBindPoint(paramarg0: number): number;
    static npipelineBindPoint(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeneratedCommandsMemoryRequirementsInfoNV;
    indirectCommandsLayout(): number;
    indirectCommandsLayout(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    maxSequencesCount(): number;
    maxSequencesCount(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    pNext(): number;
    pNext(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    pipeline(): number;
    pipeline(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    pipelineBindPoint(): number;
    pipelineBindPoint(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    sType(): number;
    sType(arg0: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    sType$Default(): VkGeneratedCommandsMemoryRequirementsInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): VkGeneratedCommandsMemoryRequirementsInfoNV;
    set(arg0: VkGeneratedCommandsMemoryRequirementsInfoNV): VkGeneratedCommandsMemoryRequirementsInfoNV;
    sizeof(): number;
}