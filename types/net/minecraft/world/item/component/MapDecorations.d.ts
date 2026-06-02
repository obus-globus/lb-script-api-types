import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MapDecorations$Entry } from '../../../../../net/minecraft/world/item/component/MapDecorations$Entry.d.ts'
export class MapDecorations extends Record {
    static CODEC: Codec<MapDecorations>;
    static EMPTY: MapDecorations;
    constructor(decorations: { [key: string]: MapDecorations$Entry })
    // private decorations: { [key: string]: MapDecorations$Entry };
    decorations(): { [key: string]: MapDecorations$Entry };
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    withDecoration(id: string, entry: MapDecorations$Entry): MapDecorations;
}