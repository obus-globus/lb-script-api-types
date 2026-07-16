import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlaySoundEffect extends Record implements EnchantmentEntityEffect {
    static CODEC: MapCodec<PlaySoundEffect>;
    static bootstrap(paramregistry: MapCodec<EnchantmentEntityEffect>[]): MapCodec<EnchantmentEntityEffect>;
    constructor(soundEvents: Holder<SoundEvent>[], volume: FloatProvider, pitch: FloatProvider)
    // private pitch: FloatProvider;
    // private soundEvents: Holder<SoundEvent>[];
    // private volume: FloatProvider;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<PlaySoundEffect>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    pitch(): FloatProvider;
    soundEvents(): Holder<SoundEvent>[];
    toString(): string;
    volume(): FloatProvider;
}