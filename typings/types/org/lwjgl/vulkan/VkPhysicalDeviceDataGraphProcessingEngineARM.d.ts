import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceDataGraphProcessingEngineARM extends Struct<VkPhysicalDeviceDataGraphProcessingEngineARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static ISFOREIGN: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static TYPE: number;
    static calloc(): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static create(paramarg0: number): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceDataGraphProcessingEngineARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nisForeign(paramarg0: number): number;
    static nisForeign(paramarg0: number, paramarg1: number): void;
    static ntype(paramarg0: number): number;
    static ntype(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceDataGraphProcessingEngineARM;
    isForeign(): boolean;
    isForeign(arg0: boolean): VkPhysicalDeviceDataGraphProcessingEngineARM;
    set(arg0: number, arg1: boolean): VkPhysicalDeviceDataGraphProcessingEngineARM;
    set(arg0: VkPhysicalDeviceDataGraphProcessingEngineARM): VkPhysicalDeviceDataGraphProcessingEngineARM;
    sizeof(): number;
    type(): number;
    type(arg0: number): VkPhysicalDeviceDataGraphProcessingEngineARM;
}