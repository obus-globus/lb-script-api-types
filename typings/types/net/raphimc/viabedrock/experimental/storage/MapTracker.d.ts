import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MapObject } from '../../../../../net/raphimc/viabedrock/experimental/model/map/MapObject.d.ts'
export class MapTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly mapObjects: Long2ObjectMap<MapObject>;
    readonly nextMapId: number;
    getMapObjects(): Long2ObjectMap<MapObject>;
    getNextMapId(): number;
}