import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeInstance } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance.d.ts'
import type { AttributeSupplier$Builder } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier$Builder.d.ts'
export class AttributeSupplier extends Object {
    static builder(): AttributeSupplier$Builder;
    private constructor(instances: JavaMap<Holder<Attribute>, AttributeInstance>)
    // private instances: JavaMap<Holder<Attribute>, AttributeInstance>;
    createInstance(onDirty: (param0: AttributeInstance) => void, attribute: Holder<Attribute>): AttributeInstance;
    // private getAttributeInstance(attribute: Holder<Attribute>): AttributeInstance;
    getBaseValue(attribute: Holder<Attribute>): number;
    getModifierValue(attribute: Holder<Attribute>, id: Identifier): number;
    getValue(attribute: Holder<Attribute>): number;
    hasAttribute(attribute: Holder<Attribute>): boolean;
    hasModifier(attribute: Holder<Attribute>, modifier: Identifier): boolean;
}