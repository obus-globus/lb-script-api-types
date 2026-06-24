import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkIndirectCommandsLayoutPushDataTokenNV } from '../../../org/lwjgl/vulkan/VkIndirectCommandsLayoutPushDataTokenNV.d.ts'
export class VkIndirectCommandsLayoutTokenNV extends Struct<VkIndirectCommandsLayoutTokenNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDEXTYPECOUNT: number;
    static INDIRECTSTATEFLAGS: number;
    static OFFSET: number;
    static PINDEXTYPES: number;
    static PINDEXTYPEVALUES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PUSHCONSTANTOFFSET: number;
    static PUSHCONSTANTPIPELINELAYOUT: number;
    static PUSHCONSTANTSHADERSTAGEFLAGS: number;
    static PUSHCONSTANTSIZE: number;
    static SIZEOF: number;
    static STREAM: number;
    static STYPE: number;
    static TOKENTYPE: number;
    static VERTEXBINDINGUNIT: number;
    static VERTEXDYNAMICSTRIDE: number;
    static calloc(): VkIndirectCommandsLayoutTokenNV;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutTokenNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsLayoutTokenNV;
    static create(paramarg0: number): VkIndirectCommandsLayoutTokenNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsLayoutTokenNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsLayoutTokenNV;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutTokenNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindexTypeCount(paramarg0: number): number;
    static nindexTypeCount(paramarg0: number, paramarg1: number): void;
    static nindirectStateFlags(paramarg0: number): number;
    static nindirectStateFlags(paramarg0: number, paramarg1: number): void;
    static noffset(paramarg0: number): number;
    static noffset(paramarg0: number, paramarg1: number): void;
    static npIndexTypeValues(paramarg0: number): IntBuffer;
    static npIndexTypeValues(paramarg0: number, paramarg1: IntBuffer): void;
    static npIndexTypes(paramarg0: number): IntBuffer;
    static npIndexTypes(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npushconstantOffset(paramarg0: number): number;
    static npushconstantOffset(paramarg0: number, paramarg1: number): void;
    static npushconstantPipelineLayout(paramarg0: number): number;
    static npushconstantPipelineLayout(paramarg0: number, paramarg1: number): void;
    static npushconstantShaderStageFlags(paramarg0: number): number;
    static npushconstantShaderStageFlags(paramarg0: number, paramarg1: number): void;
    static npushconstantSize(paramarg0: number): number;
    static npushconstantSize(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstream$(paramarg0: number): number;
    static nstream$(paramarg0: number, paramarg1: number): void;
    static ntokenType(paramarg0: number): number;
    static ntokenType(paramarg0: number, paramarg1: number): void;
    static nvertexBindingUnit(paramarg0: number): number;
    static nvertexBindingUnit(paramarg0: number, paramarg1: number): void;
    static nvertexDynamicStride(paramarg0: number): number;
    static nvertexDynamicStride(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsLayoutTokenNV;
    indexTypeCount(): number;
    indexTypeCount(arg0: number): VkIndirectCommandsLayoutTokenNV;
    indirectStateFlags(): number;
    indirectStateFlags(arg0: number): VkIndirectCommandsLayoutTokenNV;
    offset(): number;
    offset(arg0: number): VkIndirectCommandsLayoutTokenNV;
    pIndexTypeValues(): IntBuffer;
    pIndexTypeValues(arg0: IntBuffer): VkIndirectCommandsLayoutTokenNV;
    pIndexTypes(): IntBuffer;
    pIndexTypes(arg0: IntBuffer): VkIndirectCommandsLayoutTokenNV;
    pNext(): number;
    pNext(arg0: number): VkIndirectCommandsLayoutTokenNV;
    pNext(arg0: VkIndirectCommandsLayoutPushDataTokenNV): VkIndirectCommandsLayoutTokenNV;
    pushconstantOffset(): number;
    pushconstantOffset(arg0: number): VkIndirectCommandsLayoutTokenNV;
    pushconstantPipelineLayout(): number;
    pushconstantPipelineLayout(arg0: number): VkIndirectCommandsLayoutTokenNV;
    pushconstantShaderStageFlags(): number;
    pushconstantShaderStageFlags(arg0: number): VkIndirectCommandsLayoutTokenNV;
    pushconstantSize(): number;
    pushconstantSize(arg0: number): VkIndirectCommandsLayoutTokenNV;
    sType(): number;
    sType(arg0: number): VkIndirectCommandsLayoutTokenNV;
    sType$Default(): VkIndirectCommandsLayoutTokenNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: IntBuffer, arg14: IntBuffer): VkIndirectCommandsLayoutTokenNV;
    set(arg0: VkIndirectCommandsLayoutTokenNV): VkIndirectCommandsLayoutTokenNV;
    sizeof(): number;
    stream$(): number;
    stream$(arg0: number): VkIndirectCommandsLayoutTokenNV;
    tokenType(): number;
    tokenType(arg0: number): VkIndirectCommandsLayoutTokenNV;
    vertexBindingUnit(): number;
    vertexBindingUnit(arg0: number): VkIndirectCommandsLayoutTokenNV;
    vertexDynamicStride(): boolean;
    vertexDynamicStride(arg0: boolean): VkIndirectCommandsLayoutTokenNV;
}