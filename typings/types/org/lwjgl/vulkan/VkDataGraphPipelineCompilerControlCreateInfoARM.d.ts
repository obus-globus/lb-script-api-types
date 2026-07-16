import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkDataGraphPipelineCompilerControlCreateInfoARM extends Struct<VkDataGraphPipelineCompilerControlCreateInfoARM> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PVENDOROPTIONS: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static calloc(paramarg0: MemoryStack): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static create(paramarg0: number): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static malloc(paramarg0: MemoryStack): VkDataGraphPipelineCompilerControlCreateInfoARM;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npVendorOptions(paramarg0: number): ByteBuffer;
    static npVendorOptions(paramarg0: number, paramarg1: ByteBuffer): void;
    static npVendorOptionsString(paramarg0: number): string;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkDataGraphPipelineCompilerControlCreateInfoARM;
    pNext(): number;
    pNext(arg0: number): VkDataGraphPipelineCompilerControlCreateInfoARM;
    pVendorOptions(): ByteBuffer;
    pVendorOptions(arg0: ByteBuffer): VkDataGraphPipelineCompilerControlCreateInfoARM;
    pVendorOptionsString(): string;
    sType(): number;
    sType(arg0: number): VkDataGraphPipelineCompilerControlCreateInfoARM;
    sType$Default(): VkDataGraphPipelineCompilerControlCreateInfoARM;
    set(arg0: number, arg1: number, arg2: ByteBuffer): VkDataGraphPipelineCompilerControlCreateInfoARM;
    set(arg0: VkDataGraphPipelineCompilerControlCreateInfoARM): VkDataGraphPipelineCompilerControlCreateInfoARM;
    sizeof(): number;
}