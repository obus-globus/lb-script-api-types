import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { LongCounter } from '../../../../io/netty/util/internal/LongCounter.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { MethodHandles$Lookup } from '../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { VarHandle } from '../../../../java/lang/invoke/VarHandle.d.ts'
import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Random } from '../../../../java/util/Random.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PlatformDependent extends Object {
    static BIG_ENDIAN_NATIVE_ORDER: boolean;
    static absolutePut(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): ByteBuffer;
    static absolutePut(paramarg0: ByteBuffer, paramarg1: number, paramarg2: ByteBuffer, paramarg3: number, paramarg4: number): ByteBuffer;
    static addressSize(): number;
    static align(paramarg0: number, paramarg1: number): number;
    static alignDirectBuffer(paramarg0: ByteBuffer, paramarg1: number): ByteBuffer;
    static allocateDirect(paramarg0: number): CleanableDirectBuffer;
    static allocateDirect(paramarg0: number, paramarg1: boolean): CleanableDirectBuffer;
    static allocateMemory(paramarg0: number): number;
    static allocateUninitializedArray(paramarg0: number): number[];
    static bitMode(): number;
    static byteArrayBaseOffset(): number;
    static canEnableTcpNoDelayByDefault(): boolean;
    static canReliabilyFreeDirectBuffers(): boolean;
    static canUnalignedAccess(): boolean;
    static compareAndSwapInt(paramarg0: Object, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static copyMemory(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): void;
    static copyMemory(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static copyMemory(paramarg0: number, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static copyMemory(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static createTempFile(paramarg0: string, paramarg1: string, paramarg2: File): File;
    static directBuffer(paramarg0: number, paramarg1: number): ByteBuffer;
    static directBufferAddress(paramarg0: ByteBuffer): number;
    static directBufferPreferred(): boolean;
    static equals(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static equalsConstantTime(paramarg0: number[], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): number;
    static estimateMaxDirectMemory(): number;
    static findVarHandleOfIntField(paramarg0: MethodHandles$Lookup, paramarg1: Class<Object>, paramarg2: string): VarHandle;
    static freeDirectBuffer(paramarg0: ByteBuffer): void;
    static freeMemory(paramarg0: number): void;
    static getAndAddInt(paramarg0: Object, paramarg1: number, paramarg2: number): number;
    static getByte(paramarg0: number[], paramarg1: number): number;
    static getByte(paramarg0: number[], paramarg1: number): number;
    static getByte(paramarg0: number): number;
    static getClassLoader(paramarg0: Class<Object>): ClassLoader;
    static getContextClassLoader(): ClassLoader;
    static getInt(paramarg0: number[], paramarg1: number): number;
    static getInt(paramarg0: number[], paramarg1: number): number;
    static getInt(paramarg0: Object, paramarg1: number): number;
    static getInt(paramarg0: number): number;
    static getLong(paramarg0: number[], paramarg1: number): number;
    static getLong(paramarg0: number): number;
    static getLong(paramarg0: number[], paramarg1: number): number;
    static getObject(paramarg0: Object, paramarg1: number): Object;
    static getShort(paramarg0: number[], paramarg1: number): number;
    static getShort(paramarg0: number): number;
    static getSystemClassLoader(): ClassLoader;
    static getUnsafeUnavailabilityCause(): Throwable;
    static getVolatileInt(paramarg0: Object, paramarg1: number): number;
    static hasAlignDirectByteBuffer(): boolean;
    static hasDirectBufferNoCleanerConstructor(): boolean;
    static hasDirectByteBufferAddress(paramarg0: ByteBuffer): boolean;
    static hasUnsafe(): boolean;
    static hasVarHandle(): boolean;
    static hashCodeAscii(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static hashCodeAscii(paramarg0: CharSequence): number;
    static intBeArrayView(): VarHandle;
    static intBeByteBufferView(): VarHandle;
    static intLeArrayView(): VarHandle;
    static intLeByteBufferView(): VarHandle;
    static isAndroid(): boolean;
    static isExplicitNoPreferDirect(): boolean;
    static isIkvmDotNet(): boolean;
    static isJ9Jvm(): boolean;
    static isJfrEnabled(): boolean;
    static isOsx(): boolean;
    static isUnaligned(): boolean;
    static isVirtualThread(paramarg0: Thread): boolean;
    static isWindows(): boolean;
    static isZero(paramarg0: number[], paramarg1: number, paramarg2: number): boolean;
    static javaVersion(): number;
    static longBeArrayView(): VarHandle;
    static longBeByteBufferView(): VarHandle;
    static longLeArrayView(): VarHandle;
    static longLeByteBufferView(): VarHandle;
    static maxDirectMemory(): number;
    static maybeSuperUser(): boolean;
    static newConcurrentDeque(): (Object | null)[];
    static newConcurrentHashMap(): Map<Object | null, Object | null>;
    static newConcurrentHashMap(paramarg0: number): Map<Object | null, Object | null>;
    static newConcurrentHashMap(paramarg0: number, paramarg1: number): Map<Object | null, Object | null>;
    static newConcurrentHashMap(paramarg0: number, paramarg1: number, paramarg2: number): Map<Object | null, Object | null>;
    static newConcurrentHashMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static newFixedMpmcQueue(paramarg0: number): (Object | null)[];
    static newFixedMpscQueue(paramarg0: number): (Object | null)[];
    static newFixedMpscUnpaddedQueue(paramarg0: number): (Object | null)[];
    static newLongCounter(): LongCounter;
    static newMpscQueue(): (Object | null)[];
    static newMpscQueue(paramarg0: number): (Object | null)[];
    static newMpscQueue(paramarg0: number, paramarg1: number): (Object | null)[];
    static newSpscQueue(): (Object | null)[];
    static normalizedArch(): string;
    static normalizedLinuxClassifiers(): string[];
    static normalizedOs(): string;
    static objectFieldOffset(paramarg0: Field): number;
    static offsetSlice(paramarg0: ByteBuffer, paramarg1: number, paramarg2: number): ByteBuffer;
    static putByte(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static putByte(paramarg0: Object, paramarg1: number, paramarg2: number): void;
    static putByte(paramarg0: number, paramarg1: number): void;
    static putInt(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static putInt(paramarg0: number, paramarg1: number): void;
    static putLong(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static putLong(paramarg0: number, paramarg1: number): void;
    static putObject(paramarg0: Object, paramarg1: number, paramarg2: Object): void;
    static putOrderedInt(paramarg0: Object, paramarg1: number, paramarg2: number): void;
    static putShort(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static putShort(paramarg0: number, paramarg1: number): void;
    static reallocateDirect(paramarg0: CleanableDirectBuffer, paramarg1: number): CleanableDirectBuffer;
    static reallocateMemory(paramarg0: number, paramarg1: number): number;
    static setMemory(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static setMemory(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static shortBeArrayView(): VarHandle;
    static shortBeByteBufferView(): VarHandle;
    static shortLeArrayView(): VarHandle;
    static shortLeByteBufferView(): VarHandle;
    static threadLocalRandom(): Random;
    static throwException(paramarg0: Throwable): void;
    static tmpdir(): File;
    static useDirectBufferNoCleaner(): boolean;
    static useVarHandleForMultiByteAccess(): boolean;
    static usedDirectMemory(): number;
    private constructor()
}