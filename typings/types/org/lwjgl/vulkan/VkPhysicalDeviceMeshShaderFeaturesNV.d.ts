import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMeshShaderFeaturesNV extends Struct<VkPhysicalDeviceMeshShaderFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MESHSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static TASKSHADER: number;
    static calloc(): VkPhysicalDeviceMeshShaderFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMeshShaderFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMeshShaderFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceMeshShaderFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMeshShaderFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMeshShaderFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMeshShaderFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmeshShader(paramarg0: number): number;
    static nmeshShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static ntaskShader(paramarg0: number): number;
    static ntaskShader(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMeshShaderFeaturesNV;
    meshShader(): boolean;
    meshShader(arg0: boolean): VkPhysicalDeviceMeshShaderFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMeshShaderFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMeshShaderFeaturesNV;
    sType$Default(): VkPhysicalDeviceMeshShaderFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceMeshShaderFeaturesNV;
    set(arg0: VkPhysicalDeviceMeshShaderFeaturesNV): VkPhysicalDeviceMeshShaderFeaturesNV;
    sizeof(): number;
    taskShader(): boolean;
    taskShader(arg0: boolean): VkPhysicalDeviceMeshShaderFeaturesNV;
}