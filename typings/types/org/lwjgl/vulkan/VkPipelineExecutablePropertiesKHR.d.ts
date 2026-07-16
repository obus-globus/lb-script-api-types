import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineExecutablePropertiesKHR extends Struct<VkPipelineExecutablePropertiesKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTION: number;
    static NAME: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STAGES: number;
    static STYPE: number;
    static SUBGROUPSIZE: number;
    static calloc(): VkPipelineExecutablePropertiesKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineExecutablePropertiesKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineExecutablePropertiesKHR;
    static create(paramarg0: number): VkPipelineExecutablePropertiesKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineExecutablePropertiesKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineExecutablePropertiesKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineExecutablePropertiesKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstages(paramarg0: number): number;
    static nsubgroupSize(paramarg0: number): number;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineExecutablePropertiesKHR;
    description(): ByteBuffer;
    descriptionString(): string;
    name(): ByteBuffer;
    nameString(): string;
    pNext(): number;
    pNext(arg0: number): VkPipelineExecutablePropertiesKHR;
    sType(): number;
    sType(arg0: number): VkPipelineExecutablePropertiesKHR;
    sType$Default(): VkPipelineExecutablePropertiesKHR;
    set(arg0: number, arg1: number): VkPipelineExecutablePropertiesKHR;
    set(arg0: VkPipelineExecutablePropertiesKHR): VkPipelineExecutablePropertiesKHR;
    sizeof(): number;
    stages(): number;
    subgroupSize(): number;
}