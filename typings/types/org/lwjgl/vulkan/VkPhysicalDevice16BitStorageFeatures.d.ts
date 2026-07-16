import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevice16BitStorageFeatures extends Struct<VkPhysicalDevice16BitStorageFeatures> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STORAGEBUFFER16BITACCESS: number;
    static STORAGEINPUTOUTPUT16: number;
    static STORAGEPUSHCONSTANT16: number;
    static STYPE: number;
    static UNIFORMANDSTORAGEBUFFER16BITACCESS: number;
    static calloc(): VkPhysicalDevice16BitStorageFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevice16BitStorageFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevice16BitStorageFeatures;
    static create(paramarg0: number): VkPhysicalDevice16BitStorageFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevice16BitStorageFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevice16BitStorageFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevice16BitStorageFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstorageBuffer16BitAccess(paramarg0: number): number;
    static nstorageBuffer16BitAccess(paramarg0: number, paramarg1: number): void;
    static nstorageInputOutput16(paramarg0: number): number;
    static nstorageInputOutput16(paramarg0: number, paramarg1: number): void;
    static nstoragePushConstant16(paramarg0: number): number;
    static nstoragePushConstant16(paramarg0: number, paramarg1: number): void;
    static nuniformAndStorageBuffer16BitAccess(paramarg0: number): number;
    static nuniformAndStorageBuffer16BitAccess(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevice16BitStorageFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevice16BitStorageFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDevice16BitStorageFeatures;
    sType$Default(): VkPhysicalDevice16BitStorageFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): VkPhysicalDevice16BitStorageFeatures;
    set(arg0: VkPhysicalDevice16BitStorageFeatures): VkPhysicalDevice16BitStorageFeatures;
    sizeof(): number;
    storageBuffer16BitAccess(): boolean;
    storageBuffer16BitAccess(arg0: boolean): VkPhysicalDevice16BitStorageFeatures;
    storageInputOutput16(): boolean;
    storageInputOutput16(arg0: boolean): VkPhysicalDevice16BitStorageFeatures;
    storagePushConstant16(): boolean;
    storagePushConstant16(arg0: boolean): VkPhysicalDevice16BitStorageFeatures;
    uniformAndStorageBuffer16BitAccess(): boolean;
    uniformAndStorageBuffer16BitAccess(arg0: boolean): VkPhysicalDevice16BitStorageFeatures;
}