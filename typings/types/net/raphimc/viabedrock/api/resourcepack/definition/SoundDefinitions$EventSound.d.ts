import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundDefinitions$ConfiguredSound } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$ConfiguredSound.d.ts'
export class SoundDefinitions$EventSound extends Record {
    constructor(event: string, sound: SoundDefinitions$ConfiguredSound)
    // private event: string;
    // private sound: SoundDefinitions$ConfiguredSound;
    equals(arg0: Object | null): boolean;
    event(): string;
    hashCode(): number;
    sound(): SoundDefinitions$ConfiguredSound;
    toString(): string;
}