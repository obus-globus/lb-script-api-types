import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SoundEngine } from '../../../../net/minecraft/client/sounds/SoundEngine.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
export interface Weighted<T extends Object | number | string | boolean> extends Object{
    getSound(random: RandomSource): T;
    getWeight(): number;
    preloadIfRequired(soundEngine: SoundEngine): void;
}