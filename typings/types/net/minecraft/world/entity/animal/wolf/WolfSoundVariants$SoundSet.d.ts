import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class WolfSoundVariants$SoundSet extends Enum<WolfSoundVariants$SoundSet> {
    static ANGRY: WolfSoundVariants$SoundSet;
    static BIG: WolfSoundVariants$SoundSet;
    static CLASSIC: WolfSoundVariants$SoundSet;
    static CUTE: WolfSoundVariants$SoundSet;
    static GRUMPY: WolfSoundVariants$SoundSet;
    static PUGLIN: WolfSoundVariants$SoundSet;
    static SAD: WolfSoundVariants$SoundSet;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): WolfSoundVariants$SoundSet;
    static values(): WolfSoundVariants$SoundSet[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "PUGLIN" | "SAD" | "ANGRY" | "GRUMPY" | "BIG" | "CUTE";
}