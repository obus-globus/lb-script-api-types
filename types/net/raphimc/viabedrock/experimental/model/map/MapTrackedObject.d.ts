import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MapTrackedObject$Type } from '../../../../../../net/raphimc/viabedrock/experimental/model/map/MapTrackedObject$Type.d.ts'
export class MapTrackedObject extends Object {
    constructor(arg0: BlockPosition)
    constructor(arg0: number)
    readonly entityId: number;
    readonly position: BlockPosition;
    readonly type: MapTrackedObject$Type;
    getEntityId(): number;
    getPosition(): BlockPosition;
    getType(): MapTrackedObject$Type;
}