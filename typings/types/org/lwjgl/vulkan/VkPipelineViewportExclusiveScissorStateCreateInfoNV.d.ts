import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineViewportExclusiveScissorStateCreateInfoNV extends Struct<VkPipelineViewportExclusiveScissorStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static EXCLUSIVESCISSORCOUNT: number;
    static PEXCLUSIVESCISSORS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nexclusiveScissorCount(paramarg0: number): number;
    static nexclusiveScissorCount(paramarg0: number, paramarg1: number): void;
    static npExclusiveScissors(paramarg0: number): (Object | null)[];
    static npExclusiveScissors(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    exclusiveScissorCount(): number;
    exclusiveScissorCount(arg0: number): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    pExclusiveScissors(): (Object | null)[];
    pExclusiveScissors(arg0: (Object | null)[]): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    sType$Default(): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    set(arg0: VkPipelineViewportExclusiveScissorStateCreateInfoNV): VkPipelineViewportExclusiveScissorStateCreateInfoNV;
    sizeof(): number;
}