import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { FloatBuffer } from '../../../java/nio/FloatBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineCoverageModulationStateCreateInfoNV extends Struct<VkPipelineCoverageModulationStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COVERAGEMODULATIONMODE: number;
    static COVERAGEMODULATIONTABLECOUNT: number;
    static COVERAGEMODULATIONTABLEENABLE: number;
    static FLAGS: number;
    static PCOVERAGEMODULATIONTABLE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineCoverageModulationStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineCoverageModulationStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineCoverageModulationStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineCoverageModulationStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineCoverageModulationStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncoverageModulationMode(paramarg0: number): number;
    static ncoverageModulationMode(paramarg0: number, paramarg1: number): void;
    static ncoverageModulationTableCount(paramarg0: number): number;
    static ncoverageModulationTableCount(paramarg0: number, paramarg1: number): void;
    static ncoverageModulationTableEnable(paramarg0: number): number;
    static ncoverageModulationTableEnable(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npCoverageModulationTable(paramarg0: number): FloatBuffer;
    static npCoverageModulationTable(paramarg0: number, paramarg1: FloatBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    coverageModulationMode(): number;
    coverageModulationMode(arg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    coverageModulationTableCount(): number;
    coverageModulationTableCount(arg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    coverageModulationTableEnable(): boolean;
    coverageModulationTableEnable(arg0: boolean): VkPipelineCoverageModulationStateCreateInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkPipelineCoverageModulationStateCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    pCoverageModulationTable(): FloatBuffer;
    pCoverageModulationTable(arg0: FloatBuffer): VkPipelineCoverageModulationStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineCoverageModulationStateCreateInfoNV;
    sType$Default(): VkPipelineCoverageModulationStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: FloatBuffer): VkPipelineCoverageModulationStateCreateInfoNV;
    set(arg0: VkPipelineCoverageModulationStateCreateInfoNV): VkPipelineCoverageModulationStateCreateInfoNV;
    sizeof(): number;
}