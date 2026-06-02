import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeInstance$Packed } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeInstance$Packed.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
export class AttributeInstance extends Object {
    constructor(attribute: Holder<Attribute>, onDirty: (param0: AttributeInstance) => void)
    readonly attribute: Holder<Attribute>;
    readonly baseValue: number;
    // private cachedValue: number;
    // private dirty: boolean;
    // private modifierById: Map<Identifier, AttributeModifier>;
    // private modifiersByOperation: { [key in AttributeModifier$Operation]: Map<Identifier, AttributeModifier> };
    // private onDirty: (param0: AttributeInstance) => void;
    readonly permanentModifiers: Map<Identifier, AttributeModifier>;
    // private addModifier(modifier: AttributeModifier): void;
    addOrReplacePermanentModifier(modifier: AttributeModifier): void;
    addOrUpdateTransientModifier(modifier: AttributeModifier): void;
    addPermanentModifier(modifier: AttributeModifier): void;
    addPermanentModifiers(modifiers: E[]): void;
    addTransientModifier(modifier: AttributeModifier): void;
    apply(packed: AttributeInstance$Packed): void;
    // private calculateValue(): number;
    getAttribute(): Holder<Attribute>;
    getBaseValue(): number;
    getModifier(id: Identifier): AttributeModifier;
    getModifiers(): AttributeModifier[];
    getModifiers(operation: AttributeModifier$Operation): Map<Identifier, AttributeModifier>;
    // private getModifiersOrEmpty(operation: AttributeModifier$Operation): E[];
    getPermanentModifiers(): AttributeModifier[];
    getValue(): number;
    hasModifier(modifier: Identifier): boolean;
    pack(): AttributeInstance$Packed;
    removeModifier(id: Identifier): boolean;
    removeModifier(modifier: AttributeModifier): void;
    removeModifiers(): void;
    replaceFrom(other: AttributeInstance): void;
    setBaseValue(baseValue: number): void;
    setDirty(): void;
}