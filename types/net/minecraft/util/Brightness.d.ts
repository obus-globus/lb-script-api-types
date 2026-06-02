import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Brightness extends Record {
    static CODEC: Codec<Brightness>;
    static FULL_BRIGHT: Brightness;
    static LIGHT_VALUE_CODEC: Codec<number>;
    static unpack(parampacked: number): Brightness;
    // private block: number;
    // private sky: number;
    block(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pack(): number;
    sky(): number;
    toString(): string;
}