import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI } from '../../../org/lwjgl/vulkan/VkPhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI.d.ts'
export class VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI extends Struct<VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static CLUSTERCULLINGSHADER: number;
    static MULTIVIEWCLUSTERCULLINGSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static create(paramarg0: number): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nclustercullingShader(paramarg0: number): number;
    static nclustercullingShader(paramarg0: number, paramarg1: number): void;
    static nmultiviewClusterCullingShader(paramarg0: number): number;
    static nmultiviewClusterCullingShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    clustercullingShader(): boolean;
    clustercullingShader(arg0: boolean): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    multiviewClusterCullingShader(): boolean;
    multiviewClusterCullingShader(arg0: boolean): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    pNext(arg0: VkPhysicalDeviceClusterCullingShaderVrsFeaturesHUAWEI): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    sType$Default(): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    set(arg0: VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI): VkPhysicalDeviceClusterCullingShaderFeaturesHUAWEI;
    sizeof(): number;
}