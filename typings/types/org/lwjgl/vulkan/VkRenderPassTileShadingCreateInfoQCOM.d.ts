import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
export class VkRenderPassTileShadingCreateInfoQCOM extends Struct<VkRenderPassTileShadingCreateInfoQCOM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILEAPRONSIZE: number;
    static calloc(): VkRenderPassTileShadingCreateInfoQCOM;
    static calloc(paramarg0: MemoryStack): VkRenderPassTileShadingCreateInfoQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkRenderPassTileShadingCreateInfoQCOM;
    static create(paramarg0: number): VkRenderPassTileShadingCreateInfoQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkRenderPassTileShadingCreateInfoQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkRenderPassTileShadingCreateInfoQCOM;
    static malloc(paramarg0: MemoryStack): VkRenderPassTileShadingCreateInfoQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntileApronSize(paramarg0: number): VkExtent2D;
    static ntileApronSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkRenderPassTileShadingCreateInfoQCOM;
    flags(): number;
    flags(arg0: number): VkRenderPassTileShadingCreateInfoQCOM;
    pNext(): number;
    pNext(arg0: number): VkRenderPassTileShadingCreateInfoQCOM;
    sType(): number;
    sType(arg0: number): VkRenderPassTileShadingCreateInfoQCOM;
    sType$Default(): VkRenderPassTileShadingCreateInfoQCOM;
    set(arg0: number, arg1: number, arg2: number, arg3: VkExtent2D): VkRenderPassTileShadingCreateInfoQCOM;
    set(arg0: VkRenderPassTileShadingCreateInfoQCOM): VkRenderPassTileShadingCreateInfoQCOM;
    sizeof(): number;
    tileApronSize(): VkExtent2D;
    tileApronSize(arg0: (param0: VkExtent2D) => void): VkRenderPassTileShadingCreateInfoQCOM;
    tileApronSize(arg0: VkExtent2D): VkRenderPassTileShadingCreateInfoQCOM;
}