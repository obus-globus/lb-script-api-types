import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV extends Struct<VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LINEARSWEPTSPHERES: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static SPHERES: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlinearSweptSpheres(paramarg0: number): number;
    static nlinearSweptSpheres(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nspheres(paramarg0: number): number;
    static nspheres(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    linearSweptSpheres(): boolean;
    linearSweptSpheres(arg0: boolean): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    sType$Default(): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    set(arg0: VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
    sizeof(): number;
    spheres(): boolean;
    spheres(arg0: boolean): VkPhysicalDeviceRayTracingLinearSweptSpheresFeaturesNV;
}