import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SoundCard } from '../../../../../oshi/hardware/SoundCard.d.ts'
import type { AbstractSoundCard } from '../../../../../oshi/hardware/common/AbstractSoundCard.d.ts'
export class AixSoundCard extends AbstractSoundCard {
    static getSoundCards(paramarg0: () => Object | null): SoundCard[];
    constructor(arg0: string, arg1: string, arg2: string)
}