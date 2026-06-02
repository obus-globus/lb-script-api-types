import type { SoundCard } from '../../../../oshi/hardware/SoundCard.d.ts'
import type { AbstractSoundCard } from '../../../../oshi/hardware/common/AbstractSoundCard.d.ts'
export class MacSoundCard extends AbstractSoundCard {
    static getSoundCards(): SoundCard[];
    constructor(arg0: string, arg1: string, arg2: string)
}