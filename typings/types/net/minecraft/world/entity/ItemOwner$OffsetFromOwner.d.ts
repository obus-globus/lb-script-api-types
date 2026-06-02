import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ItemOwner } from '../../../../net/minecraft/world/entity/ItemOwner.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ItemOwner$OffsetFromOwner extends Record implements ItemOwner {
    static offsetFromOwner(paramowner: ItemOwner, paramoffset: Vec3): ItemOwner;
    constructor(owner: ItemOwner, offset: Vec3)
    // private offset: Vec3;
    // private owner: ItemOwner;
    asLivingEntity(): LivingEntity;
    asLivingEntity(): LivingEntity;
    equals(o: Object | null): boolean;
    getVisualRotationYInDegrees(): number;
    hashCode(): number;
    level(): Level;
    offset(): Vec3;
    owner(): ItemOwner;
    position(): Vec3;
    toString(): string;
}