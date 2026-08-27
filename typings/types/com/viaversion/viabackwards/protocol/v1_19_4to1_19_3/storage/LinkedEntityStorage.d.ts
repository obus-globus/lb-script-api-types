import type { EntityPositionStorage } from '../../../../../../com/viaversion/viabackwards/api/entities/storage/EntityPositionStorage.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
export class LinkedEntityStorage extends EntityPositionStorage implements StorableObject {
    constructor()
    entities(): number[];
    isVehicle(arg0: number): boolean;
    onRemove(): void;
    passengers(): number[];
    remove(arg0: UserConnection): void;
    setEntities(...arg0: number[]): void;
    setPassengers(...arg0: number[]): void;
    setVehicleId(arg0: number): void;
    vehicleId(): number;
}