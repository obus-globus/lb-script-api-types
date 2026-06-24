import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineExecutableInternalRepresentationKHR extends Struct<VkPipelineExecutableInternalRepresentationKHR> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DATASIZE: number;
    static DESCRIPTION: number;
    static ISTEXT: number;
    static NAME: number;
    static PDATA: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineExecutableInternalRepresentationKHR;
    static calloc(paramarg0: MemoryStack): VkPipelineExecutableInternalRepresentationKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineExecutableInternalRepresentationKHR;
    static create(paramarg0: number): VkPipelineExecutableInternalRepresentationKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineExecutableInternalRepresentationKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineExecutableInternalRepresentationKHR;
    static malloc(paramarg0: MemoryStack): VkPipelineExecutableInternalRepresentationKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ndataSize(paramarg0: number): number;
    static ndescription(paramarg0: number): ByteBuffer;
    static ndescriptionString(paramarg0: number): string;
    static nisText(paramarg0: number): number;
    static nname(paramarg0: number): ByteBuffer;
    static nnameString(paramarg0: number): string;
    static npData(paramarg0: number): ByteBuffer;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkPipelineExecutableInternalRepresentationKHR;
    dataSize(): number;
    description(): ByteBuffer;
    descriptionString(): string;
    isText(): boolean;
    name(): ByteBuffer;
    nameString(): string;
    pData(): ByteBuffer;
    pNext(): number;
    pNext(arg0: number): VkPipelineExecutableInternalRepresentationKHR;
    sType(): number;
    sType(arg0: number): VkPipelineExecutableInternalRepresentationKHR;
    sType$Default(): VkPipelineExecutableInternalRepresentationKHR;
    set(arg0: number, arg1: number): VkPipelineExecutableInternalRepresentationKHR;
    set(arg0: VkPipelineExecutableInternalRepresentationKHR): VkPipelineExecutableInternalRepresentationKHR;
    sizeof(): number;
}