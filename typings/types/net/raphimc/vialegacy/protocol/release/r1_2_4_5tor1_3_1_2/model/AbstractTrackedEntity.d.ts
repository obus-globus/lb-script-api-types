import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Location } from '../../../../../../../net/raphimc/vialegacy/api/model/Location.d.ts'
export abstract class AbstractTrackedEntity extends Object {
    constructor(arg0: number, arg1: Location, arg2: EntityTypes1_8$EntityType)
    readonly entityId: number;
    readonly entityType: EntityTypes1_8$EntityType;
    // private isRiding: boolean;
    readonly location: Location;
    getEntityId(): number;
    getEntityType(): EntityTypes1_8$EntityType;
    getLocation(): Location;
    isRiding(): boolean;
    setEntityId(arg0: number): void;
    setEntityType(arg0: EntityTypes1_8$EntityType): void;
    setLocation(arg0: Location): void;
    setRiding(arg0: boolean): void;
}