import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDevice8BitStorageFeatures extends Struct<VkPhysicalDevice8BitStorageFeatures> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STORAGEBUFFER8BITACCESS: number;
    static STORAGEPUSHCONSTANT8: number;
    static STYPE: number;
    static UNIFORMANDSTORAGEBUFFER8BITACCESS: number;
    static calloc(): VkPhysicalDevice8BitStorageFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDevice8BitStorageFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDevice8BitStorageFeatures;
    static create(paramarg0: number): VkPhysicalDevice8BitStorageFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDevice8BitStorageFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDevice8BitStorageFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDevice8BitStorageFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstorageBuffer8BitAccess(paramarg0: number): number;
    static nstorageBuffer8BitAccess(paramarg0: number, paramarg1: number): void;
    static nstoragePushConstant8(paramarg0: number): number;
    static nstoragePushConstant8(paramarg0: number, paramarg1: number): void;
    static nuniformAndStorageBuffer8BitAccess(paramarg0: number): number;
    static nuniformAndStorageBuffer8BitAccess(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDevice8BitStorageFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDevice8BitStorageFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDevice8BitStorageFeatures;
    sType$Default(): VkPhysicalDevice8BitStorageFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean): VkPhysicalDevice8BitStorageFeatures;
    set(arg0: VkPhysicalDevice8BitStorageFeatures): VkPhysicalDevice8BitStorageFeatures;
    sizeof(): number;
    storageBuffer8BitAccess(): boolean;
    storageBuffer8BitAccess(arg0: boolean): VkPhysicalDevice8BitStorageFeatures;
    storagePushConstant8(): boolean;
    storagePushConstant8(arg0: boolean): VkPhysicalDevice8BitStorageFeatures;
    uniformAndStorageBuffer8BitAccess(): boolean;
    uniformAndStorageBuffer8BitAccess(arg0: boolean): VkPhysicalDevice8BitStorageFeatures;
}