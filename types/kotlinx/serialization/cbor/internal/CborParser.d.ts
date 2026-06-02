import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { Pair } from '../../../../kotlin/Pair.d.ts'
import type { Triple } from '../../../../kotlin/Triple.d.ts'
import type { ByteArrayInput } from '../../../../kotlinx/serialization/cbor/internal/ByteArrayInput.d.ts'
export class CborParser extends Object {
    constructor(input: ByteArrayInput, verifyObjectTags: boolean)
    // private curByteOrEof: number;
    // private input: ByteArrayInput;
    // private verifyObjectTags: boolean;
    // private elementLength(): number;
    end(): void;
    isEnd(): boolean;
    isEof(): boolean;
    // private isIndefinite(): boolean;
    isNull(): boolean;
    nextBoolean(tags: (Object | null)[] | null): boolean;
    nextByteString(tags: (Object | null)[] | null): number[];
    nextDouble(tags: (Object | null)[] | null): number;
    nextFloat(tags: (Object | null)[] | null): number;
    nextNull(tags: (Object | null)[] | null): void | null;
    nextNumber(tags: (Object | null)[] | null): number;
    nextNumberWithinRange(tags: (Object | null)[] | null, from: number, to: number, type: string): number;
    nextString(tags: (Object | null)[] | null): string;
    // private nextTaggedString(tags: (Object | null)[] | null): Pair<string, (Object | null)[]>;
    nextTaggedStringOrNumber(): Triple<string, number, (Object | null)[]>;
    // private peekCurByteOrFail(): number;
    // private processTags(tags: (Object | null)[] | null): (Object | null)[] | null;
    // private prune(lengthStack: number[]): void;
    // private readByte(): number;
    // private readBytes(): number[];
    // private readIndefiniteLengthStringChunks(majorType: number): number[];
    // private readInt(): number;
    // private readLong(): number;
    // private readNumber(): number;
    // private readShort(): number;
    // private readUnsignedIntegerIgnoringMajorType(valueDescriptionForError: Function0<string>): number;
    // private skipByte(expected: number): void;
    skipElement(tags: (Object | null)[] | null): void;
    startArray(tags: (Object | null)[] | null): number;
    startMap(tags: (Object | null)[] | null): number;
    // private startSized(tags: (Object | null)[] | null, unboundedHeader: number, boundedHeaderMask: number, collectionType: string): number;
    verifyTagsAndThrow(expected: (Object | null)[], actual: (Object | null)[] | null): void;
}