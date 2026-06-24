import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkViewportWScalingNV extends Struct<VkViewportWScalingNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static XCOEFF: number;
    static YCOEFF: number;
    static calloc(): VkViewportWScalingNV;
    static calloc(paramarg0: MemoryStack): VkViewportWScalingNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkViewportWScalingNV;
    static create(paramarg0: number): VkViewportWScalingNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkViewportWScalingNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkViewportWScalingNV;
    static malloc(paramarg0: MemoryStack): VkViewportWScalingNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nxcoeff(paramarg0: number): number;
    static nxcoeff(paramarg0: number, paramarg1: number): void;
    static nycoeff(paramarg0: number): number;
    static nycoeff(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkViewportWScalingNV;
    set(arg0: number, arg1: number): VkViewportWScalingNV;
    set(arg0: VkViewportWScalingNV): VkViewportWScalingNV;
    sizeof(): number;
    xcoeff(): number;
    xcoeff(arg0: number): VkViewportWScalingNV;
    ycoeff(): number;
    ycoeff(arg0: number): VkViewportWScalingNV;
}