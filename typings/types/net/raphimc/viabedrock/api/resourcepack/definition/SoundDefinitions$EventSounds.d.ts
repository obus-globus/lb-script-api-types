import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundDefinitions$ConfiguredSound } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$ConfiguredSound.d.ts'
export class SoundDefinitions$EventSounds extends Record {
    constructor(identifier: string, eventSounds: JavaMap<string, SoundDefinitions$ConfiguredSound>)
    // private eventSounds: JavaMap<string, SoundDefinitions$ConfiguredSound>;
    // private identifier: string;
    equals(arg0: Object | null): boolean;
    eventSounds(): JavaMap<string, SoundDefinitions$ConfiguredSound>;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}