import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
export class AttributeInstance$Packed extends Record {
    static CODEC: Codec<AttributeInstance$Packed>;
    static LIST_CODEC: Codec<Object>;
    // private attribute: Holder<Attribute>;
    // private baseValue: number;
    // private modifiers: AttributeModifier[];
    attribute(): Holder<Attribute>;
    baseValue(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifiers(): AttributeModifier[];
    toString(): string;
}