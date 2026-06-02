import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TextInput$MultilineOptions extends Record {
    static CODEC: Codec<TextInput$MultilineOptions>;
    static MAX_HEIGHT: number;
    constructor(maxLines: Optional<number>, height: Optional<number>)
    // private height: Optional<number>;
    // private maxLines: Optional<number>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): Optional<number>;
    maxLines(): Optional<number>;
    toString(): string;
}