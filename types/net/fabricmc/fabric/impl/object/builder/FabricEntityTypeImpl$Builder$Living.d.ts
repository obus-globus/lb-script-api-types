import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricEntityType$Builder$Living } from '../../../../../../net/fabricmc/fabric/api/object/builder/v1/entity/FabricEntityType$Builder$Living.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
export class FabricEntityTypeImpl$Builder$Living<T extends LivingEntity> extends Object implements FabricEntityType$Builder$Living<T> {
    constructor()
    // private defaultAttributeBuilder: () => AttributeSupplier$Builder;
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityType$Builder$Living<T>;
    onBuild(arg0: EntityType<T>): void;
}