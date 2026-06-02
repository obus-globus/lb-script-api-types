import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemUseAnimation } from '../../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { Consumable } from '../../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { ConsumeEffect } from '../../../../../net/minecraft/world/item/consume_effects/ConsumeEffect.d.ts'
export class Consumable$Builder extends Object {
    private constructor()
    // private animation: ItemUseAnimation;
    // private consumeSeconds: number;
    // private hasConsumeParticles: boolean;
    // private onConsumeEffects: ConsumeEffect[];
    // private sound: Holder<SoundEvent>;
    animation(animation: ItemUseAnimation): Consumable$Builder;
    build(): Consumable;
    consumeSeconds(consumeSeconds: number): Consumable$Builder;
    hasConsumeParticles(hasConsumeParticles: boolean): Consumable$Builder;
    onConsume(effect: ConsumeEffect): Consumable$Builder;
    sound(sound: Holder<SoundEvent>): Consumable$Builder;
    soundAfterConsume(soundAfterConsume: Holder<SoundEvent>): Consumable$Builder;
}