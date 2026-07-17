import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { ChunkPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/ChunkPosition.d.ts'
import type { EntityTypes26_2 } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes26_2.d.ts'
import type { AtomicInteger } from '../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { BlockState } from '../../../../../net/raphimc/viabedrock/api/model/BlockState.d.ts'
import type { ClientPlayerEntity } from '../../../../../net/raphimc/viabedrock/api/model/entity/ClientPlayerEntity.d.ts'
import type { Entity } from '../../../../../net/raphimc/viabedrock/api/model/entity/Entity.d.ts'
export class EntityTracker extends StoredObject {
    constructor(arg0: UserConnection)
    // private ID_COUNTER: AtomicInteger;
    // private clientPlayerEntity: ClientPlayerEntity;
    // private entities: JavaMap<any, any>;
    // private itemFrames: JavaMap<any, any>;
    // private javaIdToUniqueId: JavaMap<any, any>;
    // private runtimeIdToUniqueId: JavaMap<any, any>;
    addEntity<T extends Entity>(arg0: T): T;
    addEntity<T extends Entity>(arg0: T, arg1: boolean): T;
    addEntity(arg0: number, arg1: number, arg2: string, arg3: EntityTypes26_2): Entity;
    getClientPlayer(): ClientPlayerEntity;
    getEntityByJid(arg0: number): Entity;
    getEntityByRid(arg0: number): Entity;
    getEntityByUid(arg0: number): Entity;
    getNextJavaEntityId(): number;
    isEmpty(): boolean;
    prepareForRespawn(): void;
    removeEntity(arg0: Entity): void;
    removeItemFrame(arg0: BlockPosition): void;
    removeItemFrame(arg0: ChunkPosition): void;
    spawnItemFrame(arg0: BlockPosition, arg1: BlockState): void;
    tick(): void;
}