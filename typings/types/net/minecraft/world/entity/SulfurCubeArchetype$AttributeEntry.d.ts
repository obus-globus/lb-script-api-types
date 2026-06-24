import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SulfurCubeArchetype } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
export class SulfurCubeArchetype$AttributeEntry extends Record {
    static CODEC: Codec<SulfurCubeArchetype$AttributeEntry>;
    static add(paramattribute: Holder<Attribute>, paramamount: number, paramarchetype: ResourceKey<SulfurCubeArchetype>): SulfurCubeArchetype$AttributeEntry;
    static multiply(paramattribute: Holder<Attribute>, paramamount: number, paramarchetype: ResourceKey<SulfurCubeArchetype>): SulfurCubeArchetype$AttributeEntry;
    constructor(attribute: Holder<Attribute>, modifier: AttributeModifier)
    // private attribute: Holder<Attribute>;
    // private modifier: AttributeModifier;
    attribute(): Holder<Attribute>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modifier(): AttributeModifier;
    toString(): string;
}