import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class EntityTracker extends Object implements StorableObject {
    constructor()
    // private entityMap: JavaMap<number, EntityTypes1_8$EntityType>;
    readonly playerID: number;
    getPlayerID(): number;
    getTrackedEntities(): JavaMap<number, EntityTypes1_8$EntityType>;
    onRemove(): void;
    removeEntity(arg0: number): void;
    setPlayerID(arg0: number): void;
}