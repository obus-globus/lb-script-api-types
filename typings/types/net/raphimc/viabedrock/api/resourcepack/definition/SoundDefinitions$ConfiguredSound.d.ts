import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SoundDefinitions$ConfiguredSound extends Record {
    static fromJson(paramarg0: JsonObject): SoundDefinitions$ConfiguredSound;
    constructor(sound: string, minVolume: number, maxVolume: number, minPitch: number, maxPitch: number)
    // private maxPitch: number;
    // private maxVolume: number;
    // private minPitch: number;
    // private minVolume: number;
    // private sound: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    maxPitch(): number;
    maxVolume(): number;
    minPitch(): number;
    minVolume(): number;
    sound(): string;
    toJson(): JsonObject;
    toString(): string;
}