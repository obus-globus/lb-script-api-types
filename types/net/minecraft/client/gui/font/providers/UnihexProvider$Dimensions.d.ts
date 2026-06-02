import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnihexProvider$Dimensions extends Record {
    static CODEC: Codec<UnihexProvider$Dimensions>;
    static MAP_CODEC: MapCodec<UnihexProvider$Dimensions>;
    static left(parampacked: number): number;
    static pack(paramleft: number, paramright: number): number;
    static right(parampacked: number): number;
    // private left: number;
    // private right: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    left(): number;
    pack(): number;
    right(): number;
    toString(): string;
}