import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/data/sound/Sound.d.ts'
export class ConfiguredSound extends Object {
    constructor(arg0: Sound, arg1: number, arg2: number)
    readonly pitch: number;
    readonly sound: Sound;
    readonly volume: number;
    getPitch(): number;
    getSound(): Sound;
    getVolume(): number;
    setPitch(arg0: number): void;
    setSound(arg0: Sound): void;
    setVolume(arg0: number): void;
}