import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { AttributeSupplier } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
export class FabricDefaultAttributeRegistry extends Object {
    static register(paramarg0: EntityType<Object>, paramarg1: AttributeSupplier$Builder): void;
    static register(paramarg0: EntityType<Object>, paramarg1: AttributeSupplier): void;
    private constructor()
}