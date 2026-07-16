import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceCooperativeMatrix2FeaturesNV extends Struct<VkPhysicalDeviceCooperativeMatrix2FeaturesNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COOPERATIVEMATRIXBLOCKLOADS: number;
    static COOPERATIVEMATRIXCONVERSIONS: number;
    static COOPERATIVEMATRIXFLEXIBLEDIMENSIONS: number;
    static COOPERATIVEMATRIXPERELEMENTOPERATIONS: number;
    static COOPERATIVEMATRIXREDUCTIONS: number;
    static COOPERATIVEMATRIXTENSORADDRESSING: number;
    static COOPERATIVEMATRIXWORKGROUPSCOPE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static create(paramarg0: number): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncooperativeMatrixBlockLoads(paramarg0: number): number;
    static ncooperativeMatrixBlockLoads(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixConversions(paramarg0: number): number;
    static ncooperativeMatrixConversions(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixFlexibleDimensions(paramarg0: number): number;
    static ncooperativeMatrixFlexibleDimensions(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixPerElementOperations(paramarg0: number): number;
    static ncooperativeMatrixPerElementOperations(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixReductions(paramarg0: number): number;
    static ncooperativeMatrixReductions(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixTensorAddressing(paramarg0: number): number;
    static ncooperativeMatrixTensorAddressing(paramarg0: number, paramarg1: number): void;
    static ncooperativeMatrixWorkgroupScope(paramarg0: number): number;
    static ncooperativeMatrixWorkgroupScope(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    cooperativeMatrixBlockLoads(): boolean;
    cooperativeMatrixBlockLoads(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixConversions(): boolean;
    cooperativeMatrixConversions(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixFlexibleDimensions(): boolean;
    cooperativeMatrixFlexibleDimensions(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixPerElementOperations(): boolean;
    cooperativeMatrixPerElementOperations(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixReductions(): boolean;
    cooperativeMatrixReductions(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixTensorAddressing(): boolean;
    cooperativeMatrixTensorAddressing(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    cooperativeMatrixWorkgroupScope(): boolean;
    cooperativeMatrixWorkgroupScope(arg0: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    sType$Default(): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    set(arg0: VkPhysicalDeviceCooperativeMatrix2FeaturesNV): VkPhysicalDeviceCooperativeMatrix2FeaturesNV;
    sizeof(): number;
}