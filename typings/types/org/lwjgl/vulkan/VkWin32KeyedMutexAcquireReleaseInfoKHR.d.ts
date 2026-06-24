import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MemoryStack } from '../../../org/lwjgl/system/MemoryStack.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Struct } from '../../../org/lwjgl/system/Struct.d.ts'
import type { Struct$StructValidation } from '../../../org/lwjgl/system/Struct$StructValidation.d.ts'
export class VkWin32KeyedMutexAcquireReleaseInfoKHR extends Struct<VkWin32KeyedMutexAcquireReleaseInfoKHR> implements NativeResource {
    static ACQUIRECOUNT: number;
    static ALIGNOF: number;
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static PACQUIREKEYS: number;
    static PACQUIRESYNCS: number;
    static PACQUIRETIMEOUTS: number;
    static PNEXT: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static PRELEASEKEYS: number;
    static PRELEASESYNCS: number;
    static RELEASECOUNT: number;
    static SIZEOF: number;
    static STYPE: number;
    static calloc(): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static calloc(paramarg0: MemoryStack): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static calloc(paramarg0: number): (Object | null)[];
    static calloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static create(): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static create(paramarg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static create(paramarg0: number): (Object | null)[];
    static create(paramarg0: number, paramarg1: number): (Object | null)[];
    static createSafe(paramarg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static createSafe(paramarg0: number, paramarg1: number): (Object | null)[];
    static malloc(): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static malloc(paramarg0: MemoryStack): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    static malloc(paramarg0: number): (Object | null)[];
    static malloc(paramarg0: number, paramarg1: MemoryStack): (Object | null)[];
    static nacquireCount(paramarg0: number): number;
    static nacquireCount(paramarg0: number, paramarg1: number): void;
    static npAcquireKeys(paramarg0: number): LongBuffer;
    static npAcquireKeys(paramarg0: number, paramarg1: LongBuffer): void;
    static npAcquireSyncs(paramarg0: number): LongBuffer;
    static npAcquireSyncs(paramarg0: number, paramarg1: LongBuffer): void;
    static npAcquireTimeouts(paramarg0: number): IntBuffer;
    static npAcquireTimeouts(paramarg0: number, paramarg1: IntBuffer): void;
    static npNext(paramarg0: number): number;
    static npNext(paramarg0: number, paramarg1: number): void;
    static npReleaseKeys(paramarg0: number): LongBuffer;
    static npReleaseKeys(paramarg0: number, paramarg1: LongBuffer): void;
    static npReleaseSyncs(paramarg0: number): LongBuffer;
    static npReleaseSyncs(paramarg0: number, paramarg1: LongBuffer): void;
    static nreleaseCount(paramarg0: number): number;
    static nreleaseCount(paramarg0: number, paramarg1: number): void;
    static nsType(paramarg0: number): number;
    static nsType(paramarg0: number, paramarg1: number): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: (param0: number) => void): void;
    static validate(paramarg0: number): void;
    constructor(arg0: ByteBuffer)
    constructor(arg0: number, arg1: ByteBuffer)
    acquireCount(): number;
    acquireCount(arg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    close(): void;
    create(arg0: number, arg1: ByteBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pAcquireKeys(): LongBuffer;
    pAcquireKeys(arg0: LongBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pAcquireSyncs(): LongBuffer;
    pAcquireSyncs(arg0: LongBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pAcquireTimeouts(): IntBuffer;
    pAcquireTimeouts(arg0: IntBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pNext(): number;
    pNext(arg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pReleaseKeys(): LongBuffer;
    pReleaseKeys(arg0: LongBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    pReleaseSyncs(): LongBuffer;
    pReleaseSyncs(arg0: LongBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    releaseCount(): number;
    releaseCount(arg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    sType(): number;
    sType(arg0: number): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    sType$Default(): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    set(arg0: number, arg1: number, arg2: number, arg3: LongBuffer, arg4: LongBuffer, arg5: IntBuffer, arg6: number, arg7: LongBuffer, arg8: LongBuffer): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    set(arg0: VkWin32KeyedMutexAcquireReleaseInfoKHR): VkWin32KeyedMutexAcquireReleaseInfoKHR;
    sizeof(): number;
}