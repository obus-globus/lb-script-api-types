import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkGeneratedCommandsPipelineInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsPipelineInfoEXT.d.ts'
import type { VkGeneratedCommandsShaderInfoEXT } from '../../../org/lwjgl/vulkan/VkGeneratedCommandsShaderInfoEXT.d.ts'
export class VkGeneratedCommandsInfoEXT extends Struct<VkGeneratedCommandsInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTADDRESS: number;
    static INDIRECTADDRESSSIZE: number;
    static INDIRECTCOMMANDSLAYOUT: number;
    static INDIRECTEXECUTIONSET: number;
    static MAXDRAWCOUNT: number;
    static MAXSEQUENCECOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PREPROCESSADDRESS: number;
    static PREPROCESSSIZE: number;
    static SEQUENCECOUNTADDRESS: number;
    static SHADERSTAGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkGeneratedCommandsInfoEXT;
    static calloc(paramarg0: MemoryStack): VkGeneratedCommandsInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkGeneratedCommandsInfoEXT;
    static create(paramarg0: number): VkGeneratedCommandsInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkGeneratedCommandsInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkGeneratedCommandsInfoEXT;
    static malloc(paramarg0: MemoryStack): VkGeneratedCommandsInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectAddress(paramarg0: number): number;
    static nindirectAddress(paramarg0: number, paramarg1: number): void;
    static nindirectAddressSize(paramarg0: number): number;
    static nindirectAddressSize(paramarg0: number, paramarg1: number): void;
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
    static npreprocessAddress(paramarg0: number): number;
    static npreprocessAddress(paramarg0: number, paramarg1: number): void;
    static npreprocessSize(paramarg0: number): number;
    static npreprocessSize(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsequenceCountAddress(paramarg0: number): number;
    static nsequenceCountAddress(paramarg0: number, paramarg1: number): void;
    static nshaderStages(paramarg0: number): number;
    static nshaderStages(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkGeneratedCommandsInfoEXT;
    indirectAddress(): number;
    indirectAddress(arg0: number): VkGeneratedCommandsInfoEXT;
    indirectAddressSize(): number;
    indirectAddressSize(arg0: number): VkGeneratedCommandsInfoEXT;
    indirectCommandsLayout(): number;
    indirectCommandsLayout(arg0: number): VkGeneratedCommandsInfoEXT;
    indirectExecutionSet(): number;
    indirectExecutionSet(arg0: number): VkGeneratedCommandsInfoEXT;
    maxDrawCount(): number;
    maxDrawCount(arg0: number): VkGeneratedCommandsInfoEXT;
    maxSequenceCount(): number;
    maxSequenceCount(arg0: number): VkGeneratedCommandsInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkGeneratedCommandsInfoEXT;
    pNext(arg0: VkGeneratedCommandsPipelineInfoEXT): VkGeneratedCommandsInfoEXT;
    pNext(arg0: VkGeneratedCommandsShaderInfoEXT): VkGeneratedCommandsInfoEXT;
    preprocessAddress(): number;
    preprocessAddress(arg0: number): VkGeneratedCommandsInfoEXT;
    preprocessSize(): number;
    preprocessSize(arg0: number): VkGeneratedCommandsInfoEXT;
    sType(): number;
    sType(arg0: number): VkGeneratedCommandsInfoEXT;
    sType$Default(): VkGeneratedCommandsInfoEXT;
    sequenceCountAddress(): number;
    sequenceCountAddress(arg0: number): VkGeneratedCommandsInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): VkGeneratedCommandsInfoEXT;
    set(arg0: VkGeneratedCommandsInfoEXT): VkGeneratedCommandsInfoEXT;
    shaderStages(): number;
    shaderStages(arg0: number): VkGeneratedCommandsInfoEXT;
    sizeof(): number;
}