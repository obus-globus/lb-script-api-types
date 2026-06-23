import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class MapTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly mapObjects: { [key: string]: any };
    readonly nextMapId: number;
    getMapObjects(): { [key: string]: any };
    getNextMapId(): number;
}