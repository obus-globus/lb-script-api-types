import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundTypeBuilderImpl$Entry } from '../../../../../../net/fabricmc/fabric/impl/datagen/client/SoundTypeBuilderImpl$Entry.d.ts'
export class SoundTypeBuilderImpl$SoundType extends Record {
    static CODEC: Codec<SoundTypeBuilderImpl$SoundType>;
    constructor(sounds: SoundTypeBuilderImpl$Entry[], replace: boolean, subtitle: Optional<string>)
    // private replace: boolean;
    // private sounds: SoundTypeBuilderImpl$Entry[];
    // private subtitle: Optional<string>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    replace(): boolean;
    sounds(): SoundTypeBuilderImpl$Entry[];
    subtitle(): Optional<string>;
    toString(): string;
}