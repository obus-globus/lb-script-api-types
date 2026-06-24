import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkIndirectCommandsLayoutCreateInfoNV extends Struct<VkIndirectCommandsLayoutCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static FLAGS: number;
    static PIPELINEBINDPOINT: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PSTREAMSTRIDES: number;
    static PTOKENS: number;
    static SIZEOF: number;
    static STREAMCOUNT: number;
    static STYPE: number;
    static TOKENCOUNT: number;
    static calloc(): VkIndirectCommandsLayoutCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkIndirectCommandsLayoutCreateInfoNV;
    static create(paramarg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkIndirectCommandsLayoutCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkIndirectCommandsLayoutCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npStreamStrides(paramarg0: number): IntBuffer;
    static npStreamStrides(paramarg0: number, paramarg1: IntBuffer): void;
    static npTokens(paramarg0: number): (Object | null)[];
    static npTokens(paramarg0: number, paramarg1: (Object | null)[]): void;
    static npipelineBindPoint(paramarg0: number): number;
    static npipelineBindPoint(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static nstreamCount(paramarg0: number): number;
    static nstreamCount(paramarg0: number, paramarg1: number): void;
    static ntokenCount(paramarg0: number): number;
    static ntokenCount(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkIndirectCommandsLayoutCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    pStreamStrides(): IntBuffer;
    pStreamStrides(arg0: IntBuffer): VkIndirectCommandsLayoutCreateInfoNV;
    pTokens(): (Object | null)[];
    pTokens(arg0: (Object | null)[]): VkIndirectCommandsLayoutCreateInfoNV;
    pipelineBindPoint(): number;
    pipelineBindPoint(arg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkIndirectCommandsLayoutCreateInfoNV;
    sType$Default(): VkIndirectCommandsLayoutCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: (Object | null)[], arg5: IntBuffer): VkIndirectCommandsLayoutCreateInfoNV;
    set(arg0: VkIndirectCommandsLayoutCreateInfoNV): VkIndirectCommandsLayoutCreateInfoNV;
    sizeof(): number;
    streamCount(): number;
    tokenCount(): number;
}