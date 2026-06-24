import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineViewportWScalingStateCreateInfoNV extends Struct<VkPipelineViewportWScalingStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVIEWPORTWSCALINGS: number;
    static SIZEOF: number;
    static STYPE: number;
    static VIEWPORTCOUNT: number;
    static VIEWPORTWSCALINGENABLE: number;
    static calloc(): VkPipelineViewportWScalingStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineViewportWScalingStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineViewportWScalingStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineViewportWScalingStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineViewportWScalingStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineViewportWScalingStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineViewportWScalingStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npViewportWScalings(paramarg0: number): (Object | null)[];
    static npViewportWScalings(paramarg0: number, paramarg1: (Object | null)[]): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nviewportCount(paramarg0: number): number;
    static nviewportCount(paramarg0: number, paramarg1: number): void;
    static nviewportWScalingEnable(paramarg0: number): number;
    static nviewportWScalingEnable(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineViewportWScalingStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineViewportWScalingStateCreateInfoNV;
    pViewportWScalings(): (Object | null)[];
    pViewportWScalings(arg0: (Object | null)[]): VkPipelineViewportWScalingStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineViewportWScalingStateCreateInfoNV;
    sType$Default(): VkPipelineViewportWScalingStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: (Object | null)[]): VkPipelineViewportWScalingStateCreateInfoNV;
    set(arg0: VkPipelineViewportWScalingStateCreateInfoNV): VkPipelineViewportWScalingStateCreateInfoNV;
    sizeof(): number;
    viewportCount(): number;
    viewportCount(arg0: number): VkPipelineViewportWScalingStateCreateInfoNV;
    viewportWScalingEnable(): boolean;
    viewportWScalingEnable(arg0: boolean): VkPipelineViewportWScalingStateCreateInfoNV;
}