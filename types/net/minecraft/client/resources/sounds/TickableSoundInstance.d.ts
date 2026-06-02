import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SoundInstance } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
export interface TickableSoundInstance extends Object, SoundInstance{
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    isStopped(): boolean;
    tick(): void;
}