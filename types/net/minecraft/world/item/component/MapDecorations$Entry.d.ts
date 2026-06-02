import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { MapDecorationType } from '../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class MapDecorations$Entry extends Record {
    static CODEC: Codec<MapDecorations$Entry>;
    // private rotation: number;
    // private type: Holder<MapDecorationType>;
    // private x: number;
    // private z: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rotation(): number;
    toString(): string;
    type(): Holder<MapDecorationType>;
    x(): number;
    z(): number;
}