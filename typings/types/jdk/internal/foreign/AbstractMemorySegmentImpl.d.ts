import type { Class } from '../../../java/lang/Class.d.ts'
import type { IndexOutOfBoundsException } from '../../../java/lang/IndexOutOfBoundsException.d.ts'
import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { AddressLayout } from '../../../java/lang/foreign/AddressLayout.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { SegmentAllocator } from '../../../java/lang/foreign/SegmentAllocator.d.ts'
import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ValueLayout$OfBoolean } from '../../../java/lang/foreign/ValueLayout$OfBoolean.d.ts'
import type { ValueLayout$OfByte } from '../../../java/lang/foreign/ValueLayout$OfByte.d.ts'
import type { ValueLayout$OfChar } from '../../../java/lang/foreign/ValueLayout$OfChar.d.ts'
import type { ValueLayout$OfDouble } from '../../../java/lang/foreign/ValueLayout$OfDouble.d.ts'
import type { ValueLayout$OfFloat } from '../../../java/lang/foreign/ValueLayout$OfFloat.d.ts'
import type { ValueLayout$OfInt } from '../../../java/lang/foreign/ValueLayout$OfInt.d.ts'
import type { ValueLayout$OfLong } from '../../../java/lang/foreign/ValueLayout$OfLong.d.ts'
import type { ValueLayout$OfShort } from '../../../java/lang/foreign/ValueLayout$OfShort.d.ts'
import type { Buffer } from '../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { MemorySessionImpl } from '../../../jdk/internal/foreign/MemorySessionImpl.d.ts'
import type { NativeMemorySegmentImpl } from '../../../jdk/internal/foreign/NativeMemorySegmentImpl.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class AbstractMemorySegmentImpl extends Object implements MemorySegment, SegmentAllocator, BiFunction<string, Number[], RuntimeException> {
    static NULL: MemorySegment;
    static copy(paramarg0: Object, paramarg1: number, paramarg2: MemorySegment, paramarg3: ValueLayout, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: Object, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: MemorySegment, paramarg4: ValueLayout, paramarg5: number, paramarg6: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: number, paramarg2: MemorySegment, paramarg3: number, paramarg4: number): void;
    static copy(paramarg0: Object, paramarg1: number, paramarg2: MemorySegment, paramarg3: ValueLayout, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: Object, paramarg4: number, paramarg5: number): void;
    static copy(paramarg0: MemorySegment, paramarg1: ValueLayout, paramarg2: number, paramarg3: MemorySegment, paramarg4: ValueLayout, paramarg5: number, paramarg6: number): void;
    static mismatch(paramarg0: MemorySegment, paramarg1: number, paramarg2: number, paramarg3: MemorySegment, paramarg4: number, paramarg5: number): number;
    static ofAddress(paramarg0: number): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofArray(paramarg0: string[]): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofArray(paramarg0: number[]): MemorySegment;
    static ofBuffer(paramarg0: Buffer): MemorySegment;
    static ofBuffer(paramarg0: Buffer): AbstractMemorySegmentImpl;
    static prefixAllocator(paramarg0: MemorySegment): (param0: number, param1: number) => java.lang.foreign.MemorySegment;
    static slicingAllocator(paramarg0: MemorySegment): (param0: number, param1: number) => java.lang.foreign.MemorySegment;
    constructor(arg0: number, arg1: boolean, arg2: MemorySessionImpl)
    // private length: number;
    readonly readOnly: boolean;
    // private scope: MemorySessionImpl;
    allocate(arg0: MemoryLayout): MemorySegment;
    allocate(arg0: MemoryLayout, arg1: number): MemorySegment;
    allocate(arg0: number): MemorySegment;
    allocate(arg0: number, arg1: number): MemorySegment;
    allocateFrom(arg0: AddressLayout, arg1: MemorySegment): MemorySegment;
    allocateFrom(arg0: ValueLayout, arg1: MemorySegment, arg2: ValueLayout, arg3: number, arg4: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfByte, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfByte, arg1: number[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfChar, arg1: string): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfChar, arg1: string[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfDouble, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfDouble, arg1: number[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfFloat, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfFloat, arg1: number[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfInt, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfInt, arg1: number[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfLong, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfLong, arg1: number[]): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfShort, arg1: number): MemorySegment;
    allocateFrom(arg0: ValueLayout$OfShort, arg1: number[]): MemorySegment;
    allocateFrom(arg0: string): MemorySegment;
    allocateFrom(arg0: string, arg1: Charset): MemorySegment;
    // private allocateNoInit(arg0: MemoryLayout): MemorySegment;
    // private allocateNoInit(arg0: MemoryLayout, arg1: number): MemorySegment;
    // private allocateNoInit(arg0: number): MemorySegment;
    andThen(arg0: (param0: R) => V): (param0: T, param1: U) => V;
    apply(arg0: string, arg1: Number[]): RuntimeException;
    asByteBuffer(): ByteBuffer;
    asOverlappingSlice(arg0: MemorySegment): Optional<MemorySegment>;
    asReadOnly(): AbstractMemorySegmentImpl;
    asSlice(arg0: number): AbstractMemorySegmentImpl;
    asSlice(arg0: number, arg1: MemoryLayout): MemorySegment;
    asSlice(arg0: number, arg1: number): AbstractMemorySegmentImpl;
    asSlice(arg0: number, arg1: number, arg2: number): MemorySegment;
    // private asSliceNoCheck(arg0: number, arg1: number): AbstractMemorySegmentImpl;
    byteSize(): number;
    checkAccess(arg0: number, arg1: number, arg2: boolean): void;
    // private checkArraySize(arg0: string, arg1: number): number;
    checkBounds(arg0: number, arg1: number): void;
    checkEnclosingLayout(arg0: number, arg1: MemoryLayout, arg2: boolean): void;
    checkReadOnly(arg0: boolean): void;
    copyFrom(arg0: MemorySegment): MemorySegment;
    dup(arg0: number, arg1: number, arg2: boolean, arg3: MemorySessionImpl): AbstractMemorySegmentImpl;
    elements(arg0: MemoryLayout): Stream<MemorySegment>;
    equals(arg0: Object | null): boolean;
    fill(arg0: number): MemorySegment;
    force(): void;
    get(arg0: AddressLayout, arg1: number): MemorySegment;
    get(arg0: ValueLayout$OfBoolean, arg1: number): boolean;
    get(arg0: ValueLayout$OfByte, arg1: number): number;
    get(arg0: ValueLayout$OfChar, arg1: number): string;
    get(arg0: ValueLayout$OfDouble, arg1: number): number;
    get(arg0: ValueLayout$OfFloat, arg1: number): number;
    get(arg0: ValueLayout$OfInt, arg1: number): number;
    get(arg0: ValueLayout$OfLong, arg1: number): number;
    get(arg0: ValueLayout$OfShort, arg1: number): number;
    getAtIndex(arg0: AddressLayout, arg1: number): MemorySegment;
    getAtIndex(arg0: ValueLayout$OfBoolean, arg1: number): boolean;
    getAtIndex(arg0: ValueLayout$OfByte, arg1: number): number;
    getAtIndex(arg0: ValueLayout$OfChar, arg1: number): string;
    getAtIndex(arg0: ValueLayout$OfDouble, arg1: number): number;
    getAtIndex(arg0: ValueLayout$OfFloat, arg1: number): number;
    getAtIndex(arg0: ValueLayout$OfInt, arg1: number): number;
    getAtIndex(arg0: ValueLayout$OfLong, arg1: number): number;
    getAtIndex(arg0: ValueLayout$OfShort, arg1: number): number;
    getString(arg0: number): string;
    getString(arg0: number, arg1: Charset): string;
    hashCode(): number;
    isAccessibleBy(arg0: Thread): boolean;
    isAlignedForElement(arg0: number, arg1: MemoryLayout): boolean;
    isAlignedForElement(arg0: number, arg1: number): boolean;
    isLoaded(): boolean;
    isMapped(): boolean;
    isNative(): boolean;
    isReadOnly(): boolean;
    load(): void;
    makeByteBuffer(): ByteBuffer;
    maxAlignMask(): number;
    mismatch(arg0: MemorySegment): number;
    // private outOfBoundException(arg0: number, arg1: number): IndexOutOfBoundsException;
    overlaps(arg0: AbstractMemorySegmentImpl): boolean;
    reinterpret(arg0: Arena, arg1: (param0: MemorySegment) => void): MemorySegment;
    reinterpret(arg0: number): MemorySegment;
    reinterpret(arg0: number, arg1: Arena, arg2: (param0: MemorySegment) => void): MemorySegment;
    // private reinterpretInternal(arg0: Class<Object>, arg1: number, arg2: MemorySessionImpl, arg3: (param0: MemorySegment) => void): NativeMemorySegmentImpl;
    scope(): MemorySessionImpl;
    sessionImpl(): MemorySessionImpl;
    set(arg0: AddressLayout, arg1: number, arg2: MemorySegment): void;
    set(arg0: ValueLayout$OfBoolean, arg1: number, arg2: boolean): void;
    set(arg0: ValueLayout$OfByte, arg1: number, arg2: number): void;
    set(arg0: ValueLayout$OfChar, arg1: number, arg2: string): void;
    set(arg0: ValueLayout$OfDouble, arg1: number, arg2: number): void;
    set(arg0: ValueLayout$OfFloat, arg1: number, arg2: number): void;
    set(arg0: ValueLayout$OfInt, arg1: number, arg2: number): void;
    set(arg0: ValueLayout$OfLong, arg1: number, arg2: number): void;
    set(arg0: ValueLayout$OfShort, arg1: number, arg2: number): void;
    setAtIndex(arg0: AddressLayout, arg1: number, arg2: MemorySegment): void;
    setAtIndex(arg0: ValueLayout$OfBoolean, arg1: number, arg2: boolean): void;
    setAtIndex(arg0: ValueLayout$OfByte, arg1: number, arg2: number): void;
    setAtIndex(arg0: ValueLayout$OfChar, arg1: number, arg2: string): void;
    setAtIndex(arg0: ValueLayout$OfDouble, arg1: number, arg2: number): void;
    setAtIndex(arg0: ValueLayout$OfFloat, arg1: number, arg2: number): void;
    setAtIndex(arg0: ValueLayout$OfInt, arg1: number, arg2: number): void;
    setAtIndex(arg0: ValueLayout$OfLong, arg1: number, arg2: number): void;
    setAtIndex(arg0: ValueLayout$OfShort, arg1: number, arg2: number): void;
    setString(arg0: number, arg1: string): void;
    setString(arg0: number, arg1: string, arg2: Charset): void;
    spliterator(arg0: MemoryLayout): Spliterator<MemorySegment>;
    // private toArray<Z extends Object | number | string | boolean>(arg0: Class<Z>, arg1: ValueLayout, arg2: (param0: Z) => unknown, arg3: (param0: Z) => MemorySegment): Z;
    toArray(arg0: ValueLayout$OfByte): number[];
    toArray(arg0: ValueLayout$OfChar): string[];
    toArray(arg0: ValueLayout$OfDouble): number[];
    toArray(arg0: ValueLayout$OfFloat): number[];
    toArray(arg0: ValueLayout$OfInt): number[];
    toArray(arg0: ValueLayout$OfLong): number[];
    toArray(arg0: ValueLayout$OfShort): number[];
    toString(): string;
    unload(): void;
    unsafeGetBase(): Object;
    unsafeGetOffset(): number;
}