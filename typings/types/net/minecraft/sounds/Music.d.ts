import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { SoundEvent } from '../../../net/minecraft/sounds/SoundEvent.d.ts'
export class Music extends Record {
    static CODEC: Codec<Music>;
    constructor(sound: Holder<SoundEvent>, minDelay: number, maxDelay: number, replaceCurrentMusic: boolean)
    // private maxDelay: number;
    // private minDelay: number;
    // private replaceCurrentMusic: boolean;
    // private sound: Holder<SoundEvent>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxDelay(): number;
    minDelay(): number;
    replaceCurrentMusic(): boolean;
    sound(): Holder<SoundEvent>;
    toString(): string;
}