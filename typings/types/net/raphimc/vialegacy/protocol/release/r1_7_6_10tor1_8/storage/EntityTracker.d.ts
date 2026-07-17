import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
export class EntityTracker extends StoredObject {
    constructor(arg0: UserConnection)
    // private entityMap: JavaMap<number, EntityTypes1_8$EntityType>;
    readonly groundMap: JavaMap<number, boolean>;
    // private hologramParts: JavaMap<any, any>;
    readonly playerID: number;
    readonly virtualHolograms: JavaMap<any, any>;
    clear(): void;
    getGroundMap(): JavaMap<number, boolean>;
    getNextMappedEntityId(): number;
    getPlayerID(): number;
    getTrackedEntities(): JavaMap<number, EntityTypes1_8$EntityType>;
    getVirtualHolograms(): JavaMap<any, any>;
    removeEntity(arg0: number): void;
    setPlayerID(arg0: number): void;
    trackEntity(arg0: number, arg1: EntityTypes1_8$EntityType): void;
    updateEntityAttachState(arg0: number, arg1: number): void;
    updateEntityData(arg0: number, arg1: EntityData[]): void;
    updateEntityLocation(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
}