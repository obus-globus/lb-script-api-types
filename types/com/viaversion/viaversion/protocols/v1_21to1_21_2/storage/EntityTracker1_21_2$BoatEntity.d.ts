import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EntityTracker1_21_2$BoatEntity extends Object {
    constructor(arg0: UUID, arg1: number)
    // private data: number;
    // private entityData: EntityData[];
    readonly passengers: number[];
    // private pitch: number;
    // private uuid: UUID;
    // private x: number;
    // private y: number;
    // private yaw: number;
    // private z: number;
    data(): number;
    entityData(): EntityData[];
    passengers(): number[];
    pitch(): number;
    setPassengers(arg0: number[]): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    setRotation(arg0: number, arg1: number): void;
    uuid(): UUID;
    x(): number;
    y(): number;
    yaw(): number;
    z(): number;
}