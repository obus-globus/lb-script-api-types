import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPerformanceCounterDescriptionKHR extends Struct<VkPerformanceCounterDescriptionKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CATEGORY: number;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static FLAGS: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPerformanceCounterDescriptionKHR;
    static calloc(paramarg0: MemoryStack): VkPerformanceCounterDescriptionKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPerformanceCounterDescriptionKHR;
    static create(paramarg0: number): VkPerformanceCounterDescriptionKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPerformanceCounterDescriptionKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPerformanceCounterDescriptionKHR;
    static malloc(paramarg0: MemoryStack): VkPerformanceCounterDescriptionKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncategory(paramarg0: number): ByteBuffer;
    static ncategoryString(paramarg0: number): string;
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nflags(paramarg0: number): number;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    category(): ByteBuffer;
    categoryString(): string;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPerformanceCounterDescriptionKHR;
    description(): ByteBuffer;
    descriptionString(): string;
    flags(): number;
    name(): ByteBuffer;
    nameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPerformanceCounterDescriptionKHR;
    sType(): number;
    sType(arg0: number): VkPerformanceCounterDescriptionKHR;
    sType$Default(): VkPerformanceCounterDescriptionKHR;
    set(arg0: number, arg1: number): VkPerformanceCounterDescriptionKHR;
    set(arg0: VkPerformanceCounterDescriptionKHR): VkPerformanceCounterDescriptionKHR;
    sizeof(): number;
}