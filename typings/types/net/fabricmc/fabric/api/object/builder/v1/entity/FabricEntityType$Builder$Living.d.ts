import type { Supplier } from '../../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
export interface FabricEntityType$Builder$Living<T extends LivingEntity> extends Object {
    defaultAttributes(arg0: () => AttributeSupplier$Builder): FabricEntityType$Builder$Living<T>;
}