import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Music } from '../../../../net/minecraft/sounds/Music.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class BackgroundMusic extends Record {
    static CODEC: Codec<BackgroundMusic>;
    static EMPTY: BackgroundMusic;
    static OVERWORLD: BackgroundMusic;
    constructor(defaultMusic: Optional<Music>, creativeMusic: Optional<Music>, underwaterMusic: Optional<Music>)
    constructor(sound: Holder<SoundEvent>)
    constructor(music: Music)
    // private creativeMusic: Optional<Music>;
    // private defaultMusic: Optional<Music>;
    // private underwaterMusic: Optional<Music>;
    creativeMusic(): Optional<Music>;
    defaultMusic(): Optional<Music>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    select(isCreative: boolean, isUnderwater: boolean): Optional<Music>;
    toString(): string;
    underwaterMusic(): Optional<Music>;
    withUnderwater(underwaterMusic: Music): BackgroundMusic;
}