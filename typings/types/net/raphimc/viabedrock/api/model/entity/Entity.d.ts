import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes26_2 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes26_2.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ActorDataIDs } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorDataIDs.d.ts'
import type { ActorFlags } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorFlags.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class Entity extends Object {
    constructor(arg0: UserConnection, arg1: number, arg2: number, arg3: string, arg4: number, arg5: UUID, arg6: EntityTypes26_2)
    // private age: number;
    // private entityData: Map<ActorDataIDs, EntityData>;
    hasBossBar: boolean;
    // private javaId: number;
    // private javaType: EntityTypes26_2;
    // private javaUuid: UUID;
    name: string;
    onGround: boolean;
    position: Position3f;
    rotation: Position3f;
    // private runtimeId: number;
    // private type: string;
    // private uniqueId: number;
    // private user: UserConnection;
    age(): number;
    entityData(): Map<ActorDataIDs, EntityData>;
    entityFlags(): ActorFlags[];
    eyeOffset(): number;
    getJavaEntityDataIndex(arg0: string): number;
    isOnGround(): boolean;
    javaId(): number;
    javaType(): EntityTypes26_2;
    javaUuid(): UUID;
    onEntityDataChanged(): void;
    playSound(arg0: string): void;
    remove(): void;
    runtimeId(): number;
    setHasBossBar(arg0: boolean): void;
    setName(arg0: string): void;
    setOnGround(arg0: boolean): void;
    setPosition(arg0: Position3f): void;
    setRotation(arg0: Position3f): void;
    tick(): void;
    translateEntityData(arg0: ActorDataIDs, arg1: EntityData, arg2: EntityData[]): boolean;
    type(): string;
    uniqueId(): number;
    updateEntityData(arg0: EntityData[]): void;
    updateEntityData(arg0: EntityData[], arg1: EntityData[]): void;
}