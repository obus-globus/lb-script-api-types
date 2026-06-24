import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
import type { VkAntiLagPresentationInfoAMD } from '../../../org/lwjgl/vulkan/VkAntiLagPresentationInfoAMD.d.ts'
export class VkAntiLagDataAMD extends Struct<VkAntiLagDataAMD> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static MAXFPS: number;
    static MODE: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PPRESENTATIONINFO: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkAntiLagDataAMD;
    static calloc(paramarg0: MemoryStack): VkAntiLagDataAMD;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkAntiLagDataAMD;
    static create(paramarg0: number): VkAntiLagDataAMD;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkAntiLagDataAMD;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkAntiLagDataAMD;
    static malloc(paramarg0: MemoryStack): VkAntiLagDataAMD;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nmaxFPS(paramarg0: number): number;
    static nmaxFPS(paramarg0: number, paramarg1: number): void;
    static nmode(paramarg0: number): number;
    static nmode(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npPresentationInfo(paramarg0: number): VkAntiLagPresentationInfoAMD;
    static npPresentationInfo(paramarg0: number, paramarg1: VkAntiLagPresentationInfoAMD): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkAntiLagDataAMD;
    maxFPS(): number;
    maxFPS(arg0: number): VkAntiLagDataAMD;
    mode(): number;
    mode(arg0: number): VkAntiLagDataAMD;
    pNext(): number;
    pNext(arg0: number): VkAntiLagDataAMD;
    pPresentationInfo(): VkAntiLagPresentationInfoAMD;
    pPresentationInfo(arg0: VkAntiLagPresentationInfoAMD): VkAntiLagDataAMD;
    sType(): number;
    sType(arg0: number): VkAntiLagDataAMD;
    sType$Default(): VkAntiLagDataAMD;
    set(arg0: number, arg1: number, arg2: number, arg3: number, arg4: VkAntiLagPresentationInfoAMD): VkAntiLagDataAMD;
    set(arg0: VkAntiLagDataAMD): VkAntiLagDataAMD;
    sizeof(): number;
}