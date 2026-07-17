import type { Codec } from '../../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SoundTypeBuilder$RegistrationType extends Enum<SoundTypeBuilder$RegistrationType> implements StringRepresentable {
    static CODEC: Codec<SoundTypeBuilder$RegistrationType>;
    static FILE: SoundTypeBuilder$RegistrationType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SOUND_EVENT: SoundTypeBuilder$RegistrationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SoundTypeBuilder$RegistrationType;
    static values(): SoundTypeBuilder$RegistrationType[];
    private constructor(arg2: string)
    // private name: string;
    getSerializedName(): string;
    name(): "FILE" | "SOUND_EVENT";
}