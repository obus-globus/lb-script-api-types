import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMultiviewFeatures extends Struct<VkPhysicalDeviceMultiviewFeatures> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MULTIVIEW: number;
    static MULTIVIEWGEOMETRYSHADER: number;
    static MULTIVIEWTESSELLATIONSHADER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMultiviewFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMultiviewFeatures;
    static create(paramarg0: number): VkPhysicalDeviceMultiviewFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMultiviewFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMultiviewFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmultiview(paramarg0: number): number;
    static nmultiview(paramarg0: number, paramarg1: number): void;
    static nmultiviewGeometryShader(paramarg0: number): number;
    static nmultiviewGeometryShader(paramarg0: number, paramarg1: number): void;
    static nmultiviewTessellationShader(paramarg0: number): number;
    static nmultiviewTessellationShader(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMultiviewFeatures;
    multiview(): boolean;
    multiview(arg0: boolean): VkPhysicalDeviceMultiviewFeatures;
    multiviewGeometryShader(): boolean;
    multiviewGeometryShader(arg0: boolean): VkPhysicalDeviceMultiviewFeatures;
    multiviewTessellationShader(): boolean;
    multiviewTessellationShader(arg0: boolean): VkPhysicalDeviceMultiviewFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMultiviewFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMultiviewFeatures;
    sType$Default(): VkPhysicalDeviceMultiviewFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDeviceMultiviewFeatures;
    set(arg0: VkPhysicalDeviceMultiviewFeatures): VkPhysicalDeviceMultiviewFeatures;
    sizeof(): number;
}