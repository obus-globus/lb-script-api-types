import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineViewportSwizzleStateCreateInfoNV extends Struct<VkPipelineViewportSwizzleStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWPORTSWIZZLES: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWPORTCOUNT: number;
    static calloc(): VkPipelineViewportSwizzleStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportSwizzleStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportSwizzleStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineViewportSwizzleStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportSwizzleStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportSwizzleStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportSwizzleStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewportSwizzles(paramarg0: number): (Object | null)[];
    static npViewportSwizzles(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewportCount(paramarg0: number): number;
    static nviewportCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportSwizzleStateCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkPipelineViewportSwizzleStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportSwizzleStateCreateInfoNV;
    pViewportSwizzles(): (Object | null)[];
    pViewportSwizzles(arg0: (Object | null)[]): VkPipelineViewportSwizzleStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineViewportSwizzleStateCreateInfoNV;
    sType$Default(): VkPipelineViewportSwizzleStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: (Object | null)[]): VkPipelineViewportSwizzleStateCreateInfoNV;
    set(arg0: VkPipelineViewportSwizzleStateCreateInfoNV): VkPipelineViewportSwizzleStateCreateInfoNV;
    sizeof(): number;
    viewportCount(): number;
}