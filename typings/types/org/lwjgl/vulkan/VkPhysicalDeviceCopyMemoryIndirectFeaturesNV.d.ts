import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCopyMemoryIndirectFeaturesNV extends Struct<VkPhysicalDeviceCopyMemoryIndirectFeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static INDIRECTCOPY: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nindirectCopy(paramarg0: number): number;
    static nindirectCopy(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    indirectCopy(): boolean;
    indirectCopy(arg0: boolean): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    sType$Default(): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    set(arg0: VkPhysicalDeviceCopyMemoryIndirectFeaturesNV): VkPhysicalDeviceCopyMemoryIndirectFeaturesNV;
    sizeof(): number;
}