import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR extends Struct<VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static WORKGROUPMEMORYEXPLICITLAYOUT: number;
    static WORKGROUPMEMORYEXPLICITLAYOUT16BITACCESS: number;
    static WORKGROUPMEMORYEXPLICITLAYOUT8BITACCESS: number;
    static WORKGROUPMEMORYEXPLICITLAYOUTSCALARBLOCKLAYOUT: number;
    static calloc(): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static create(paramarg0: number): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nworkgroupMemoryExplicitLayout(paramarg0: number): number;
    static nworkgroupMemoryExplicitLayout(paramarg0: number, paramarg1: number): void;
    static nworkgroupMemoryExplicitLayout16BitAccess(paramarg0: number): number;
    static nworkgroupMemoryExplicitLayout16BitAccess(paramarg0: number, paramarg1: number): void;
    static nworkgroupMemoryExplicitLayout8BitAccess(paramarg0: number): number;
    static nworkgroupMemoryExplicitLayout8BitAccess(paramarg0: number, paramarg1: number): void;
    static nworkgroupMemoryExplicitLayoutScalarBlockLayout(paramarg0: number): number;
    static nworkgroupMemoryExplicitLayoutScalarBlockLayout(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    sType$Default(): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    set(arg0: VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    sizeof(): number;
    workgroupMemoryExplicitLayout(): boolean;
    workgroupMemoryExplicitLayout(arg0: boolean): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    workgroupMemoryExplicitLayout16BitAccess(): boolean;
    workgroupMemoryExplicitLayout16BitAccess(arg0: boolean): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    workgroupMemoryExplicitLayout8BitAccess(): boolean;
    workgroupMemoryExplicitLayout8BitAccess(arg0: boolean): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
    workgroupMemoryExplicitLayoutScalarBlockLayout(): boolean;
    workgroupMemoryExplicitLayoutScalarBlockLayout(arg0: boolean): VkPhysicalDeviceWorkgroupMemoryExplicitLayoutFeaturesKHR;
}