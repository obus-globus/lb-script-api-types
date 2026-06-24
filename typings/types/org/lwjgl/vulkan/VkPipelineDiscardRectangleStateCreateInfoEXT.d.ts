import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineDiscardRectangleStateCreateInfoEXT extends Struct<VkPipelineDiscardRectangleStateCreateInfoEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DISCARDRECTANGLECOUNT: number;
    static DISCARDRECTANGLEMODE: number;
    static FLAGS: number;
    static PDISCARDRECTANGLES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static calloc(paramarg0: MemoryStack): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static create(paramarg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static malloc(paramarg0: MemoryStack): VkPipelineDiscardRectangleStateCreateInfoEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndiscardRectangleCount(paramarg0: number): number;
    static ndiscardRectangleCount(paramarg0: number, paramarg1: number): void;
    static ndiscardRectangleMode(paramarg0: number): number;
    static ndiscardRectangleMode(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npDiscardRectangles(paramarg0: number): (Object | null)[];
    static npDiscardRectangles(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineDiscardRectangleStateCreateInfoEXT;
    discardRectangleCount(): number;
    discardRectangleCount(arg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    discardRectangleMode(): number;
    discardRectangleMode(arg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    flags(): number;
    flags(arg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    pDiscardRectangles(): (Object | null)[];
    pDiscardRectangles(arg0: (Object | null)[]): VkPipelineDiscardRectangleStateCreateInfoEXT;
    pNext(): number;
    pNext(arg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    sType(): number;
    sType(arg0: number): VkPipelineDiscardRectangleStateCreateInfoEXT;
    sType$Default(): VkPipelineDiscardRectangleStateCreateInfoEXT;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): VkPipelineDiscardRectangleStateCreateInfoEXT;
    set(arg0: VkPipelineDiscardRectangleStateCreateInfoEXT): VkPipelineDiscardRectangleStateCreateInfoEXT;
    sizeof(): number;
}