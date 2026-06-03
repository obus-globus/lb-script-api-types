import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { ByteString } from '../../okio/ByteString.d.ts'
import type { SegmentedByteString } from '../../okio/SegmentedByteString.d.ts'
export class -SegmentedByteString extends Object {
    static binarySearch(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static commonCopyInto(paramarg0: SegmentedByteString, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): void;
    static commonEquals(paramarg0: SegmentedByteString, paramarg1: Object): boolean;
    static commonGetSize(paramarg0: SegmentedByteString): number;
    static commonHashCode(paramarg0: SegmentedByteString): number;
    static commonInternalGet(paramarg0: SegmentedByteString, paramarg1: number): number;
    static commonRangeEquals(paramarg0: SegmentedByteString, paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): boolean;
    static commonRangeEquals(paramarg0: SegmentedByteString, paramarg1: number, paramarg2: ByteString, paramarg3: number, paramarg4: number): boolean;
    static commonSubstring(paramarg0: SegmentedByteString, paramarg1: number, paramarg2: number): ByteString;
    static commonToByteArray(paramarg0: SegmentedByteString): number[];
    static commonWrite(paramarg0: SegmentedByteString, paramarg1: Buffer, paramarg2: number, paramarg3: number): void;
    static forEachSegment(paramarg0: SegmentedByteString, paramarg1: (param0: Object | null, param1: Object | null, param2: Object | null) => void): void;
    static segment(paramarg0: SegmentedByteString, paramarg1: number): number;
}