import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceSubgroupProperties extends Struct<VkPhysicalDeviceSubgroupProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static QUADOPERATIONSINALLSTAGES: number;
    static SIZEOF: number;
    static STYPE: number;
    static SUBGROUPSIZE: number;
    static SUPPORTEDOPERATIONS: number;
    static SUPPORTEDSTAGES: number;
    static calloc(): VkPhysicalDeviceSubgroupProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceSubgroupProperties;
    static create(paramarg0: number): VkPhysicalDeviceSubgroupProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceSubgroupProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceSubgroupProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceSubgroupProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nquadOperationsInAllStages(paramarg0: number): number;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nsubgroupSize(paramarg0: number): number;
    static nsupportedOperations(paramarg0: number): number;
    static nsupportedStages(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceSubgroupProperties;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceSubgroupProperties;
    quadOperationsInAllStages(): boolean;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceSubgroupProperties;
    sType$Default(): VkPhysicalDeviceSubgroupProperties;
    set(arg0: number, arg1: number): VkPhysicalDeviceSubgroupProperties;
    set(arg0: VkPhysicalDeviceSubgroupProperties): VkPhysicalDeviceSubgroupProperties;
    sizeof(): number;
    subgroupSize(): number;
    supportedOperations(): number;
    supportedStages(): number;
}