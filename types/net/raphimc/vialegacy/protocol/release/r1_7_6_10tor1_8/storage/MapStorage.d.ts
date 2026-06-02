import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MapData } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/model/MapData.d.ts'
export class MapStorage extends Object implements StorableObject {
    constructor()
    // private maps: Int2ObjectMap<MapData>;
    getMapData(arg0: number): MapData;
    onRemove(): void;
    putMapData(arg0: number, arg1: MapData): void;
}