import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DefaultAttributesAccessor } from '../../../../../../net/fabricmc/fabric/mixin/object/builder/DefaultAttributesAccessor.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AttributeSupplier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier.d.ts'
export class DefaultAttributes extends Object implements DefaultAttributesAccessor {
    static getRegistry(): Map<EntityType<LivingEntity>, AttributeSupplier>;
    static getSupplier(paramtype: EntityType<LivingEntity>): AttributeSupplier;
    static hasSupplier(paramtype: EntityType<any>): boolean;
    static validate(): void;
    constructor()
}