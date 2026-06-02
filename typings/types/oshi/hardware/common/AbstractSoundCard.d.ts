import type { Object } from '../../../java/lang/Object.d.ts'
import type { SoundCard } from '../../../oshi/hardware/SoundCard.d.ts'
export abstract class AbstractSoundCard extends Object implements SoundCard {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly codec: string;
    // private kernelVersion: string;
    readonly name: string;
    getCodec(): string;
    getDriverVersion(): string;
    getName(): string;
    toString(): string;
}