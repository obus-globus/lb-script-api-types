import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { SoundEngine } from '../../../../net/minecraft/client/sounds/SoundEngine.d.ts'
import type { Weighted } from '../../../../net/minecraft/client/sounds/Weighted.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export class WeighedSoundEvents extends Object implements Weighted<Sound> {
    constructor(location: Identifier, subtitle: string)
    // private list: Weighted<Sound>[];
    readonly subtitle: Component;
    addSound(sound: Weighted<Sound>): void;
    getSound(random: RandomSource): Sound;
    getSubtitle(): Component;
    getWeight(): number;
    preloadIfRequired(soundEngine: SoundEngine): void;
}