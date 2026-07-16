import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI extends Struct<VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTBUFFEROFFSETALIGNMENT: number;
    static MAXOUTPUTCLUSTERCOUNT: number;
    static MAXWORKGROUPCOUNT: number;
    static MAXWORKGROUPSIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static create(paramarg0: number): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectBufferOffsetAlignment(paramarg0: number): number;
    static nmaxOutputClusterCount(paramarg0: number): number;
    static nmaxWorkGroupCount(paramarg0: number, paramarg1: number): number;
    static nmaxWorkGroupCount(paramarg0: number): IntBuffer;
    static nmaxWorkGroupSize(paramarg0: number, paramarg1: number): number;
    static nmaxWorkGroupSize(paramarg0: number): IntBuffer;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    indirectBufferOffsetAlignment(): number;
    maxOutputClusterCount(): number;
    maxWorkGroupCount(): IntBuffer;
    maxWorkGroupCount(arg0: number): number;
    maxWorkGroupSize(): IntBuffer;
    maxWorkGroupSize(arg0: number): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    sType$Default(): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    set(arg0: number, arg1: number): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    set(arg0: VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI): VkPhysicalDeviceClusterCullingShaderPropertiesHUAWEI;
    sizeof(): number;
}