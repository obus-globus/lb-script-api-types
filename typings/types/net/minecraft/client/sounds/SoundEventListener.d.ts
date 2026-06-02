import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SoundInstance } from '../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { WeighedSoundEvents } from '../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
export interface SoundEventListener extends Object{
    onPlaySound(sound: SoundInstance, soundEvent: WeighedSoundEvents, range: number): void;
}