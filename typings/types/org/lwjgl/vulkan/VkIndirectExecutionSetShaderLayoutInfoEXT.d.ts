import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectExecutionSetShaderLayoutInfoEXT extends Struct<VkIndirectExecutionSetShaderLayoutInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSETLAYOUTS: number;
    static SETLAYOUTCOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static calloc(paramarg0: MemoryStack): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static create(paramarg0: number): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static malloc(paramarg0: MemoryStack): VkIndirectExecutionSetShaderLayoutInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npSetLayouts(paramarg0: number): LongBuffer;
    static npSetLayouts(paramarg0: number, paramarg1: LongBuffer): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsetLayoutCount(paramarg0: number): number;
    static nsetLayoutCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectExecutionSetShaderLayoutInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkIndirectExecutionSetShaderLayoutInfoEXT;
    pSetLayouts(): LongBuffer;
    pSetLayouts(arg0: LongBuffer): VkIndirectExecutionSetShaderLayoutInfoEXT;
    sType(): number;
    sType(arg0: number): VkIndirectExecutionSetShaderLayoutInfoEXT;
    sType$Default(): VkIndirectExecutionSetShaderLayoutInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer): VkIndirectExecutionSetShaderLayoutInfoEXT;
    set(arg0: VkIndirectExecutionSetShaderLayoutInfoEXT): VkIndirectExecutionSetShaderLayoutInfoEXT;
    setLayoutCount(): number;
    setLayoutCount(arg0: number): VkIndirectExecutionSetShaderLayoutInfoEXT;
    sizeof(): number;
}