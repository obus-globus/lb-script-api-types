import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceShaderEnqueueFeaturesAMDX extends Struct<VkPhysicalDeviceShaderEnqueueFeaturesAMDX> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SHADERENQUEUE: number;
    static SHADERMESHENQUEUE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static create(paramarg0: number): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nshaderEnqueue(paramarg0: number): number;
    static nshaderEnqueue(paramarg0: number, paramarg1: number): void;
    static nshaderMeshEnqueue(paramarg0: number): number;
    static nshaderMeshEnqueue(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    sType$Default(): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    set(arg0: VkPhysicalDeviceShaderEnqueueFeaturesAMDX): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    shaderEnqueue(): boolean;
    shaderEnqueue(arg0: boolean): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    shaderMeshEnqueue(): boolean;
    shaderMeshEnqueue(arg0: boolean): VkPhysicalDeviceShaderEnqueueFeaturesAMDX;
    sizeof(): number;
}