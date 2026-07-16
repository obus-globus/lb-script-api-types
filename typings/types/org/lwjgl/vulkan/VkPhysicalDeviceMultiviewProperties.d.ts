import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceMultiviewProperties extends Struct<VkPhysicalDeviceMultiviewProperties> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXMULTIVIEWINSTANCEINDEX: number;
    static MAXMULTIVIEWVIEWCOUNT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceMultiviewProperties;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewProperties;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceMultiviewProperties;
    static create(paramarg0: number): VkPhysicalDeviceMultiviewProperties;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceMultiviewProperties;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceMultiviewProperties;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceMultiviewProperties;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxMultiviewInstanceIndex(paramarg0: number): number;
    static nmaxMultiviewViewCount(paramarg0: number): number;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceMultiviewProperties;
    maxMultiviewInstanceIndex(): number;
    maxMultiviewViewCount(): number;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceMultiviewProperties;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceMultiviewProperties;
    sType$Default(): VkPhysicalDeviceMultiviewProperties;
    set(arg0: number, arg1: number): VkPhysicalDeviceMultiviewProperties;
    set(arg0: VkPhysicalDeviceMultiviewProperties): VkPhysicalDeviceMultiviewProperties;
    sizeof(): number;
}