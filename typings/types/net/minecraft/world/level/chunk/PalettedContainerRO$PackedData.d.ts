import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { LongStream } from '../../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PalettedContainerRO$PackedData<T extends unknown> extends Record {
    static UNKNOWN_BITS_PER_ENTRY: number;
    constructor(paletteEntries: T[], storage: Optional<LongStream>)
    constructor(paletteEntries: T[], storage: Optional<LongStream>, bitsPerEntry: number)
    // private bitsPerEntry: number;
    // private paletteEntries: T[];
    // private storage: Optional<LongStream>;
    bitsPerEntry(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    paletteEntries(): T[];
    storage(): Optional<LongStream>;
    toString(): string;
}