import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkLatencySleepModeInfoNV extends Struct<VkLatencySleepModeInfoNV> implements NativeResource {
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static LOWLATENCYBOOST: number;
    static LOWLATENCYMODE: number;
    static MINIMUMINTERVALUS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkLatencySleepModeInfoNV;
    static calloc(paramarg0: MemoryStack): VkLatencySleepModeInfoNV;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkLatencySleepModeInfoNV;
    static create(paramarg0: number): VkLatencySleepModeInfoNV;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkLatencySleepModeInfoNV;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkLatencySleepModeInfoNV;
    static malloc(paramarg0: MemoryStack): VkLatencySleepModeInfoNV;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nlowLatencyBoost(paramarg0: number): number;
    static nlowLatencyBoost(paramarg0: number, paramarg1: number): void;
    static nlowLatencyMode(paramarg0: number): number;
    static nlowLatencyMode(paramarg0: number, paramarg1: number): void;
    static nminimumIntervalUs(paramarg0: number): number;
    static nminimumIntervalUs(paramarg0: number, paramarg1: number): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkLatencySleepModeInfoNV;
    lowLatencyBoost(): boolean;
    lowLatencyBoost(arg0: boolean): VkLatencySleepModeInfoNV;
    lowLatencyMode(): boolean;
    lowLatencyMode(arg0: boolean): VkLatencySleepModeInfoNV;
    minimumIntervalUs(): number;
    minimumIntervalUs(arg0: number): VkLatencySleepModeInfoNV;
    pNext(): number;
    pNext(arg0: number): VkLatencySleepModeInfoNV;
    sType(): number;
    sType(arg0: number): VkLatencySleepModeInfoNV;
    sType$Default(): VkLatencySleepModeInfoNV;
    set(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: number): VkLatencySleepModeInfoNV;
    set(arg0: VkLatencySleepModeInfoNV): VkLatencySleepModeInfoNV;
    sizeof(): number;
}