import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT extends Struct<VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRIMITIVETOPOLOGYLISTRESTART: number;
    static PRIMITIVETOPOLOGYPATCHLISTRESTART: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static create(paramarg0: number): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nprimitiveTopologyListRestart(paramarg0: number): number;
    static nprimitiveTopologyListRestart(paramarg0: number, paramarg1: number): void;
    static nprimitiveTopologyPatchListRestart(paramarg0: number): number;
    static nprimitiveTopologyPatchListRestart(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    primitiveTopologyListRestart(): boolean;
    primitiveTopologyListRestart(arg0: boolean): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    primitiveTopologyPatchListRestart(): boolean;
    primitiveTopologyPatchListRestart(arg0: boolean): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    sType(): number;
    sType(arg0: number): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    sType$Default(): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    set(arg0: VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT): VkPhysicalDevicePrimitiveTopologyListRestartFeaturesEXT;
    sizeof(): number;
}