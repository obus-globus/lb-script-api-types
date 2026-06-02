import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { SavedData } from '../../../../../../net/minecraft/world/level/saveddata/SavedData.d.ts'
import type { SavedDataType } from '../../../../../../net/minecraft/world/level/saveddata/SavedDataType.d.ts'
import type { MapId } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
export class MapIndex extends SavedData {
    static CODEC: Codec<MapIndex>;
    static TYPE: SavedDataType<MapIndex>;
    constructor()
    constructor(lastMapId: number)
    // private lastMapId: number;
    getNextMapId(): MapId;
}