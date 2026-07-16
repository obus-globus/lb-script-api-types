import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPhysicalDeviceVariablePointersFeatures extends Struct<VkPhysicalDeviceVariablePointersFeatures> implements NativeResource {
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
    static VARIABLEPOINTERS: number;
    static VARIABLEPOINTERSSTORAGEBUFFER: number;
    static calloc(): VkPhysicalDeviceVariablePointersFeatures;
    static calloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointersFeatures;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPhysicalDeviceVariablePointersFeatures;
    static create(paramarg0: number): VkPhysicalDeviceVariablePointersFeatures;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPhysicalDeviceVariablePointersFeatures;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPhysicalDeviceVariablePointersFeatures;
    static malloc(paramarg0: MemoryStack): VkPhysicalDeviceVariablePointersFeatures;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvariablePointers(paramarg0: number): number;
    static nvariablePointers(paramarg0: number, paramarg1: number): void;
    static nvariablePointersStorageBuffer(paramarg0: number): number;
    static nvariablePointersStorageBuffer(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPhysicalDeviceVariablePointersFeatures;
    pNext(): number;
    pNext(arg0: number): VkPhysicalDeviceVariablePointersFeatures;
    sType(): number;
    sType(arg0: number): VkPhysicalDeviceVariablePointersFeatures;
    sType$Default(): VkPhysicalDeviceVariablePointersFeatures;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean): VkPhysicalDeviceVariablePointersFeatures;
    set(arg0: VkPhysicalDeviceVariablePointersFeatures): VkPhysicalDeviceVariablePointersFeatures;
    sizeof(): number;
    variablePointers(): boolean;
    variablePointers(arg0: boolean): VkPhysicalDeviceVariablePointersFeatures;
    variablePointersStorageBuffer(): boolean;
    variablePointersStorageBuffer(arg0: boolean): VkPhysicalDeviceVariablePointersFeatures;
}