import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShader64BitIndexingFeaturesEXT extends Struct<VkPhysicalDeviceShader64BitIndexingFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADER64BITINDEXING: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshader64BitIndexing(paramarg0: number): number;
    static nshader64BitIndexing(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    sType$Default(): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    set(arg0: VkPhysicalDeviceShader64BitIndexingFeaturesEXT): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    shader64BitIndexing(): boolean;
    shader64BitIndexing(arg0: boolean): VkPhysicalDeviceShader64BitIndexingFeaturesEXT;
    sizeof(): number;
}