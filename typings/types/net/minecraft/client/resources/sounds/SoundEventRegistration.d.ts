import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
export class SoundEventRegistration extends Object {
    constructor(sounds: Sound[], replace: boolean, subtitle: string)
    readonly replace: boolean;
    readonly sounds: Sound[];
    readonly subtitle: string;
    getSounds(): Sound[];
    getSubtitle(): string;
    isReplace(): boolean;
}