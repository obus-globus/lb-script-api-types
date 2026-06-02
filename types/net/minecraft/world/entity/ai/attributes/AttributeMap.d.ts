import type { Multimap } from '../../../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeInstance } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance.d.ts'
import type { AttributeInstance$Packed } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance$Packed.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeSupplier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeSupplier.d.ts'
export class AttributeMap extends Object {
    constructor(supplier: AttributeSupplier)
    // private attributes: Map<Holder<Attribute>, AttributeInstance>;
    readonly attributesToSync: AttributeInstance[];
    readonly attributesToUpdate: AttributeInstance[];
    // private supplier: AttributeSupplier;
    addTransientAttributeModifiers(modifiers: Multimap<Holder<Attribute>, AttributeModifier>): void;
    apply(packedAttributes: AttributeInstance$Packed[]): void;
    assignAllValues(other: AttributeMap): void;
    assignBaseValues(other: AttributeMap): void;
    assignPermanentModifiers(other: AttributeMap): void;
    getAttributesToSync(): AttributeInstance[];
    getAttributesToUpdate(): AttributeInstance[];
    getBaseValue(attribute: Holder<Attribute>): number;
    getInstance(attribute: Holder<Attribute>): AttributeInstance;
    getModifierValue(attribute: Holder<Attribute>, id: Identifier): number;
    getSyncableAttributes(): E[];
    getValue(attribute: Holder<Attribute>): number;
    hasAttribute(attribute: Holder<Attribute>): boolean;
    hasModifier(attribute: Holder<Attribute>, id: Identifier): boolean;
    // private onAttributeModified(attributeInstance: AttributeInstance): void;
    pack(): AttributeInstance$Packed[];
    removeAttributeModifiers(modifiers: Multimap<Holder<Attribute>, AttributeModifier>): void;
    resetBaseValue(attribute: Holder<Attribute>): boolean;
}