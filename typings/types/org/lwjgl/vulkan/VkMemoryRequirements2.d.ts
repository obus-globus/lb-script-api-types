import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkMemoryDedicatedRequirements } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedRequirements.d.ts'
import type { VkMemoryDedicatedRequirementsKHR } from '../../../org/lwjgl/vulkan/VkMemoryDedicatedRequirementsKHR.d.ts'
import type { VkMemoryRequirements } from '../../../org/lwjgl/vulkan/VkMemoryRequirements.d.ts'
import type { VkTileMemoryRequirementsQCOM } from '../../../org/lwjgl/vulkan/VkTileMemoryRequirementsQCOM.d.ts'
export class VkMemoryRequirements2 extends Struct<VkMemoryRequirements2> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MEMORYREQUIREMENTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkMemoryRequirements2;
    static calloc(paramarg0: MemoryStack): VkMemoryRequirements2;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkMemoryRequirements2;
    static create(paramarg0: number): VkMemoryRequirements2;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkMemoryRequirements2;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkMemoryRequirements2;
    static malloc(paramarg0: MemoryStack): VkMemoryRequirements2;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmemoryRequirements(paramarg0: number): VkMemoryRequirements;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkMemoryRequirements2;
    memoryRequirements(): VkMemoryRequirements;
    pNext(): number;
    pNext(arg0: number): VkMemoryRequirements2;
    pNext(arg0: VkMemoryDedicatedRequirements): VkMemoryRequirements2;
    pNext(arg0: VkMemoryDedicatedRequirementsKHR): VkMemoryRequirements2;
    pNext(arg0: VkTileMemoryRequirementsQCOM): VkMemoryRequirements2;
    sType(): number;
    sType(arg0: number): VkMemoryRequirements2;
    sType$Default(): VkMemoryRequirements2;
    set(arg0: number, arg1: number): VkMemoryRequirements2;
    set(arg0: VkMemoryRequirements2): VkMemoryRequirements2;
    sizeof(): number;
}