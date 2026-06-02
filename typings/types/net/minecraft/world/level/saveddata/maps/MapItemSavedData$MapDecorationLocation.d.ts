import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { MapDecorationType } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class MapItemSavedData$MapDecorationLocation extends Record {
    // private rot: number;
    // private type: Holder<MapDecorationType>;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    rot(): number;
    toString(): string;
    type(): Holder<MapDecorationType>;
    x(): number;
    y(): number;
}