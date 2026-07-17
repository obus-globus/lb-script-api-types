import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class MapTracker extends StoredObject {
    constructor(arg0: UserConnection)
    readonly mapObjects: JavaMap<any, any>;
    readonly nextMapId: number;
    getMapObjects(): JavaMap<any, any>;
    getNextMapId(): number;
}