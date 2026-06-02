import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { AddressLayout } from '../../../java/lang/foreign/AddressLayout.d.ts'
import type { MemoryLayout } from '../../../java/lang/foreign/MemoryLayout.d.ts'
import type { MemorySegment } from '../../../java/lang/foreign/MemorySegment.d.ts'
import type { MemorySegment$Scope } from '../../../java/lang/foreign/MemorySegment$Scope.d.ts'
import type { SegmentAllocator } from '../../../java/lang/foreign/SegmentAllocator.d.ts'
import type { ValueLayout } from '../../../java/lang/foreign/ValueLayout.d.ts'
import type { ValueLayout$OfByte } from '../../../java/lang/foreign/ValueLayout$OfByte.d.ts'
import type { ValueLayout$OfChar } from '../../../java/lang/foreign/ValueLayout$OfChar.d.ts'
import type { ValueLayout$OfDouble } from '../../../java/lang/foreign/ValueLayout$OfDouble.d.ts'
import type { ValueLayout$OfFloat } from '../../../java/lang/foreign/ValueLayout$OfFloat.d.ts'
import type { ValueLayout$OfInt } from '../../../java/lang/foreign/ValueLayout$OfInt.d.ts'
import type { ValueLayout$OfLong } from '../../../java/lang/foreign/ValueLayout$OfLong.d.ts'
import type { ValueLayout$OfShort } from '../../../java/lang/foreign/ValueLayout$OfShort.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Arena extends AutoCloseable, SegmentAllocator, Object{
    allocate(arg0: number, arg1: number): MemorySegment;
    allocate(arg0: MemoryLayout): MemorySegment;
    allocate(arg0: MemoryLayout, arg1: number): MemorySegment;
    allocate(arg0: number): MemorySegment;
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
    close(): void;
    scope(): MemorySegment$Scope;
}