import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Location } from '../../../../../../../net/raphimc/vialegacy/api/model/Location.d.ts'
import type { EntityDataIndex1_7_6 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/data/EntityDataIndex1_7_6.d.ts'
import type { EntityTracker } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/storage/EntityTracker.d.ts'
export class HologramPartEntity extends Object {
    constructor(arg0: UserConnection, arg1: number, arg2: EntityTypes1_8$EntityType)
    // private entityData: Map<EntityDataIndex1_7_6, Object>;
    readonly entityId: number;
    // private entityTracker: EntityTracker;
    readonly entityType: EntityTypes1_8$EntityType;
    readonly location: Location;
    // private mappedEntityId: number;
    readonly riderEntity: HologramPartEntity;
    // private user: UserConnection;
    readonly vehicleEntity: HologramPartEntity;
    // private destroyArmorStand(): void;
    // private destroyHologramPartEntities(): void;
    // private get1_8EntityData(): EntityData[];
    // private getArmorStandEntityData(): EntityData[];
    getEntityData(arg0: EntityDataIndex1_7_6): Object;
    getEntityId(): number;
    getEntityType(): EntityTypes1_8$EntityType;
    // private getHeight(): number;
    getLocation(): Location;
    getRiderEntity(): HologramPartEntity;
    getVehicleEntity(): HologramPartEntity;
    // private isHologram(): boolean;
    onChange(): void;
    onRemove(): void;
    relocate(arg0: number): void;
    setEntityData(arg0: EntityDataIndex1_7_6, arg1: Object): void;
    setLocation(arg0: Location): void;
    // private setPositionFromVehicle(): void;
    setVehicleEntity(arg0: HologramPartEntity): void;
    // private spawnArmorStand(): void;
    // private spawnHologramPartEntities(): void;
    // private updateArmorStand(): void;
    // private wouldBeInvisible(): boolean;
}