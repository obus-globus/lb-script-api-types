import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkPipelineCoverageToColorStateCreateInfoNV extends Struct<VkPipelineCoverageToColorStateCreateInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static COVERAGETOCOLORENABLE: number;
    static COVERAGETOCOLORLOCATION: number;
    static FLAGS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkPipelineCoverageToColorStateCreateInfoNV;
    static calloc(paramarg0: MemoryStack): VkPipelineCoverageToColorStateCreateInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkPipelineCoverageToColorStateCreateInfoNV;
    static create(paramarg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkPipelineCoverageToColorStateCreateInfoNV;
    static malloc(paramarg0: MemoryStack): VkPipelineCoverageToColorStateCreateInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static ncoverageToColorEnable(paramarg0: number): number;
    static ncoverageToColorEnable(paramarg0: number, paramarg1: number): void;
    static ncoverageToColorLocation(paramarg0: number): number;
    static ncoverageToColorLocation(paramarg0: number, paramarg1: number): void;
    static nflags(paramarg0: number): number;
    static nflags(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    coverageToColorEnable(): boolean;
    coverageToColorEnable(arg0: boolean): VkPipelineCoverageToColorStateCreateInfoNV;
    coverageToColorLocation(): number;
    coverageToColorLocation(arg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    create(arg0: number, arg1: ByteBuffer): VkPipelineCoverageToColorStateCreateInfoNV;
    flags(): number;
    flags(arg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    pNext(): number;
    pNext(arg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    sType(): number;
    sType(arg0: number): VkPipelineCoverageToColorStateCreateInfoNV;
    sType$Default(): VkPipelineCoverageToColorStateCreateInfoNV;
    set(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): VkPipelineCoverageToColorStateCreateInfoNV;
    set(arg0: VkPipelineCoverageToColorStateCreateInfoNV): VkPipelineCoverageToColorStateCreateInfoNV;
    sizeof(): number;
}