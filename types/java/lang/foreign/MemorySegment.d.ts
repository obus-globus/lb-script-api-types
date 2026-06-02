import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { AddressLayout } from '../../../java/lang/foreign/AddressLayout.d.ts'
import type { Arena } from '../../../java/lang/foreign/Arena.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { MemorySegment$Scope } from '../../../java/lang/foreign/MemorySegment$Scope.d.ts'
import type { ValueLayout$OfBoolean } from '../../../java/lang/foreign/ValueLayout$OfBoolean.d.ts'
import type { ValueLayout$OfByte } from '../../../java/lang/foreign/ValueLayout$OfByte.d.ts'
import type { ValueLayout$OfChar } from '../../../java/lang/foreign/ValueLayout$OfChar.d.ts'
import type { ValueLayout$OfDouble } from '../../../java/lang/foreign/ValueLayout$OfDouble.d.ts'
import type { ValueLayout$OfFloat } from '../../../java/lang/foreign/ValueLayout$OfFloat.d.ts'
import type { ValueLayout$OfInt } from '../../../java/lang/foreign/ValueLayout$OfInt.d.ts'
import type { ValueLayout$OfLong } from '../../../java/lang/foreign/ValueLayout$OfLong.d.ts'
import type { ValueLayout$OfShort } from '../../../java/lang/foreign/ValueLayout$OfShort.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Spliterator } from '../../../java/util/Spliterator.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MemorySegment extends Object{
    address(): number;
    asByteBuffer(): ByteBuffer;
    asOverlappingSlice(arg0: MemorySegment): Optional<MemorySegment>;
    asReadOnly(): MemorySegment;
    asSlice(arg0: number): MemorySegment;
    asSlice(arg0: number, arg1: MemoryLayout): MemorySegment;
    asSlice(arg0: number, arg1: number): MemorySegment;
    asSlice(arg0: number, arg1: number, arg2: number): MemorySegment;
    byteSize(): number;
    copyFrom(arg0: MemorySegment): MemorySegment;
    elements(arg0: MemoryLayout): Stream<MemorySegment>;
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
    heapBase(): Optional<Object>;
    isAccessibleBy(arg0: Thread): boolean;
    isLoaded(): boolean;
    isMapped(): boolean;
    isNative(): boolean;
    isReadOnly(): boolean;
    load(): void;
    maxByteAlignment(): number;
    mismatch(arg0: MemorySegment): number;
    reinterpret(arg0: Arena, arg1: (param0: MemorySegment) => void): MemorySegment;
    reinterpret(arg0: number): MemorySegment;
    reinterpret(arg0: number, arg1: Arena, arg2: (param0: MemorySegment) => void): MemorySegment;
    scope(): MemorySegment$Scope;
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
    toArray(arg0: ValueLayout$OfByte): number[];
    toArray(arg0: ValueLayout$OfChar): string[];
    toArray(arg0: ValueLayout$OfDouble): number[];
    toArray(arg0: ValueLayout$OfFloat): number[];
    toArray(arg0: ValueLayout$OfInt): number[];
    toArray(arg0: ValueLayout$OfLong): number[];
    toArray(arg0: ValueLayout$OfShort): number[];
    unload(): void;
}