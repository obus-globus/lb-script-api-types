import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectExecutionSetShaderInfoEXT extends Struct<VkIndirectExecutionSetShaderInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXSHADERCOUNT: number;
    static PINITIALSHADERS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPUSHCONSTANTRANGES: number;
    static PSETLAYOUTINFOS: number;
    static PUSHCONSTANTRANGECOUNT: number;
    static SHADERCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkIndirectExecutionSetShaderInfoEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectExecutionSetShaderInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectExecutionSetShaderInfoEXT;
    static create(paramarg0: number): VkIndirectExecutionSetShaderInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectExecutionSetShaderInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectExecutionSetShaderInfoEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectExecutionSetShaderInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxShaderCount(paramarg0: number): number;
    static nmaxShaderCount(paramarg0: number, paramarg1: number): void;
    static npInitialShaders(paramarg0: number): LongBuffer;
    static npInitialShaders(paramarg0: number, paramarg1: LongBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPushConstantRanges(paramarg0: number): (Object | null)[];
    static npPushConstantRanges(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npSetLayoutInfos(paramarg0: number): (Object | null)[];
    static npSetLayoutInfos(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npushConstantRangeCount(paramarg0: number): number;
    static npushConstantRangeCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderCount(paramarg0: number): number;
    static nshaderCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectExecutionSetShaderInfoEXT;
    maxShaderCount(): number;
    maxShaderCount(arg0: number): VkIndirectExecutionSetShaderInfoEXT;
    pInitialShaders(): LongBuffer;
    pInitialShaders(arg0: LongBuffer): VkIndirectExecutionSetShaderInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkIndirectExecutionSetShaderInfoEXT;
    pPushConstantRanges(): (Object | null)[];
    pPushConstantRanges(arg0: (Object | null)[]): VkIndirectExecutionSetShaderInfoEXT;
    pSetLayoutInfos(): (Object | null)[];
    pSetLayoutInfos(arg0: (Object | null)[]): VkIndirectExecutionSetShaderInfoEXT;
    pushConstantRangeCount(): number;
    sType(): number;
    sType(arg0: number): VkIndirectExecutionSetShaderInfoEXT;
    sType$Default(): VkIndirectExecutionSetShaderInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: (Object | null)[], arg5: number, arg6: (Object | null)[]): VkIndirectExecutionSetShaderInfoEXT;
    set(arg0: VkIndirectExecutionSetShaderInfoEXT): VkIndirectExecutionSetShaderInfoEXT;
    shaderCount(): number;
    shaderCount(arg0: number): VkIndirectExecutionSetShaderInfoEXT;
    sizeof(): number;
}