import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { SulfurCubeArchetype$AttributeEntry } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype$AttributeEntry.d.ts'
import type { SulfurCubeArchetype$ContactDamage } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype$ContactDamage.d.ts'
import type { SulfurCubeArchetype$ExplosionData } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype$ExplosionData.d.ts'
import type { SulfurCubeArchetype$KnockbackModifiers } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype$KnockbackModifiers.d.ts'
import type { SulfurCubeArchetype$SoundSettings } from '../../../../net/minecraft/world/entity/SulfurCubeArchetype$SoundSettings.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
export class SulfurCubeArchetype extends Record {
    static DEFAULT_KNOCKBACK_MODIFIERS: SulfurCubeArchetype$KnockbackModifiers;
    static DEFAULT_SOUND_SETTINGS: SulfurCubeArchetype$SoundSettings;
    static DIRECT_CODEC: Codec<SulfurCubeArchetype>;
    constructor(items: Holder<Item>[], attributeModifiers: SulfurCubeArchetype$AttributeEntry[], buoyant: boolean, explosion: Optional<SulfurCubeArchetype$ExplosionData>, contactDamage: Optional<SulfurCubeArchetype$ContactDamage>, knockbackModifiers: SulfurCubeArchetype$KnockbackModifiers, soundSettings: SulfurCubeArchetype$SoundSettings)
    // private attributeModifiers: SulfurCubeArchetype$AttributeEntry[];
    // private buoyant: boolean;
    // private contactDamage: Optional<SulfurCubeArchetype$ContactDamage>;
    // private explosion: Optional<SulfurCubeArchetype$ExplosionData>;
    // private items: Holder<Item>[];
    // private knockbackModifiers: SulfurCubeArchetype$KnockbackModifiers;
    // private soundSettings: SulfurCubeArchetype$SoundSettings;
    attributeModifiers(): SulfurCubeArchetype$AttributeEntry[];
    buoyant(): boolean;
    contactDamage(): Optional<SulfurCubeArchetype$ContactDamage>;
    equals(o: Object | null): boolean;
    explosion(): Optional<SulfurCubeArchetype$ExplosionData>;
    hashCode(): number;
    items(): Holder<Item>[];
    knockbackModifiers(): SulfurCubeArchetype$KnockbackModifiers;
    soundSettings(): SulfurCubeArchetype$SoundSettings;
    toString(): string;
}