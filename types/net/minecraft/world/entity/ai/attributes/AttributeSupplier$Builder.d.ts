import type { ImmutableMap$Builder } from '../../../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeInstance } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance.d.ts'
import type { AttributeSupplier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier.d.ts'
export class AttributeSupplier$Builder extends Object {
    constructor()
    // private builder: ImmutableMap$Builder<Holder<Attribute>, AttributeInstance>;
    // private instanceFrozen: boolean;
    add(attribute: Holder<Attribute>): AttributeSupplier$Builder;
    add(attribute: Holder<Attribute>, baseValue: number): AttributeSupplier$Builder;
    build(): AttributeSupplier;
    // private create(attribute: Holder<Attribute>): AttributeInstance;
}