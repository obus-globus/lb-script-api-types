import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkPipelineExecutableStatisticValueKHR } from '../../../org/lwjgl/vulkan/VkPipelineExecutableStatisticValueKHR.d.ts'
export class VkPipelineExecutableStatisticKHR extends Struct<VkPipelineExecutableStatisticKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static FORMAT: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static VALUE: number;
    static calloc(): VkPipelineExecutableStatisticKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineExecutableStatisticKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineExecutableStatisticKHR;
    static create(paramarg0: number): VkPipelineExecutableStatisticKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineExecutableStatisticKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineExecutableStatisticKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineExecutableStatisticKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nformat(paramarg0: number): number;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nvalue(paramarg0: number): VkPipelineExecutableStatisticValueKHR;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineExecutableStatisticKHR;
    description(): ByteBuffer;
    descriptionString(): string;
    format(): number;
    name(): ByteBuffer;
    nameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPipelineExecutableStatisticKHR;
    sType(): number;
    sType(arg0: number): VkPipelineExecutableStatisticKHR;
    sType$Default(): VkPipelineExecutableStatisticKHR;
    set(arg0: number, arg1: number): VkPipelineExecutableStatisticKHR;
    set(arg0: VkPipelineExecutableStatisticKHR): VkPipelineExecutableStatisticKHR;
    sizeof(): number;
    value(): VkPipelineExecutableStatisticValueKHR;
}