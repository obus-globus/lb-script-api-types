import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MannequinData extends Object implements StorableObject {
    constructor(arg0: UUID, arg1: string)
    // private entityData: EntityData[];
    // private itemMap: JavaMap<number, Item>;
    // private name: string;
    // private pitch: number;
    // private uuid: UUID;
    // private x: number;
    // private y: number;
    // private yaw: number;
    // private z: number;
    displayName(): Tag;
    entityData(): EntityData[];
    hasTeam(): boolean;
    headYaw(): number;
    itemMap(): JavaMap<number, Item>;
    name(): string;
    onRemove(): void;
    passengers(): number[];
    pitch(): number;
    setDisplayName(arg0: Tag): void;
    setEquipment(arg0: number, arg1: Item): void;
    setHasTeam(arg0: boolean): void;
    setHeadYaw(arg0: number): void;
    setPassengers(arg0: number[]): void;
    setPosition(arg0: number, arg1: number, arg2: number): void;
    setRotation(arg0: number, arg1: number): void;
    uuid(): UUID;
    x(): number;
    y(): number;
    yaw(): number;
    z(): number;
}