import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GameLoadTimesEvent$Measurement extends Record {
    static CODEC: Codec<GameLoadTimesEvent$Measurement>;
    constructor(millis: number)
    // private millis: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    millis(): number;
    toString(): string;
}