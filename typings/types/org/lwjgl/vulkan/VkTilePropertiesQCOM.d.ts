import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkExtent2D } from '../../../org/lwjgl/vulkan/VkExtent2D.d.ts'
import type { VkExtent3D } from '../../../org/lwjgl/vulkan/VkExtent3D.d.ts'
import type { VkOffset2D } from '../../../org/lwjgl/vulkan/VkOffset2D.d.ts'
export class VkTilePropertiesQCOM extends Struct<VkTilePropertiesQCOM> implements NativeResource {
    static ALIGNOF: number;
    static APRONSIZE: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ORIGIN: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TILESIZE: number;
    static calloc(): VkTilePropertiesQCOM;
    static calloc(paramarg0: MemoryStack): VkTilePropertiesQCOM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkTilePropertiesQCOM;
    static create(paramarg0: number): VkTilePropertiesQCOM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkTilePropertiesQCOM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkTilePropertiesQCOM;
    static malloc(paramarg0: MemoryStack): VkTilePropertiesQCOM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static napronSize(paramarg0: number): VkExtent2D;
    static napronSize(paramarg0: number, paramarg1: VkExtent2D): void;
    static norigin(paramarg0: number): VkOffset2D;
    static norigin(paramarg0: number, paramarg1: VkOffset2D): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntileSize(paramarg0: number): VkExtent3D;
    static ntileSize(paramarg0: number, paramarg1: VkExtent3D): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    apronSize(): VkExtent2D;
    apronSize(arg0: (param0: VkExtent2D) => void): VkTilePropertiesQCOM;
    apronSize(arg0: VkExtent2D): VkTilePropertiesQCOM;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkTilePropertiesQCOM;
    origin(): VkOffset2D;
    origin(arg0: (param0: VkOffset2D) => void): VkTilePropertiesQCOM;
    origin(arg0: VkOffset2D): VkTilePropertiesQCOM;
    pNext(): number;
    pNext(arg0: number): VkTilePropertiesQCOM;
    sType(): number;
    sType(arg0: number): VkTilePropertiesQCOM;
    sType$Default(): VkTilePropertiesQCOM;
    set(arg0: number, arg1: number, arg2: VkExtent3D, arg3: VkExtent2D, arg4: VkOffset2D): VkTilePropertiesQCOM;
    set(arg0: VkTilePropertiesQCOM): VkTilePropertiesQCOM;
    sizeof(): number;
    tileSize(): VkExtent3D;
    tileSize(arg0: (param0: VkExtent3D) => void): VkTilePropertiesQCOM;
    tileSize(arg0: VkExtent3D): VkTilePropertiesQCOM;
}