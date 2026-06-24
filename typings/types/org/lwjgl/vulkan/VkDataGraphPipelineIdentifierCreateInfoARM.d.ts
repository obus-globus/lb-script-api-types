import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDataGraphPipelineIdentifierCreateInfoARM extends Struct<VkDataGraphPipelineIdentifierCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static IDENTIFIERSIZE: number;
    static PIDENTIFIER: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineIdentifierCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineIdentifierCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineIdentifierCreateInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineIdentifierCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineIdentifierCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineIdentifierCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineIdentifierCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nidentifierSize(paramarg0: number): number;
    static nidentifierSize(paramarg0: number, paramarg1: number): void;
    static npIdentifier(paramarg0: number): ByteBuffer;
    static npIdentifier(paramarg0: number, paramarg1: ByteBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineIdentifierCreateInfoARM;
    identifierSize(): number;
    pIdentifier(): ByteBuffer;
    pIdentifier(arg0: ByteBuffer): VkDataGraphPipelineIdentifierCreateInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineIdentifierCreateInfoARM;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineIdentifierCreateInfoARM;
    sType$Default(): VkDataGraphPipelineIdentifierCreateInfoARM;
    set(arg0: number, arg1: number, arg2: ByteBuffer): VkDataGraphPipelineIdentifierCreateInfoARM;
    set(arg0: VkDataGraphPipelineIdentifierCreateInfoARM): VkDataGraphPipelineIdentifierCreateInfoARM;
    sizeof(): number;
}