import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PigSoundVariants$SoundSet extends Enum<PigSoundVariants$SoundSet> {
    static BIG: PigSoundVariants$SoundSet;
    static CLASSIC: PigSoundVariants$SoundSet;
    static MINI: PigSoundVariants$SoundSet;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PigSoundVariants$SoundSet;
    static values(): PigSoundVariants$SoundSet[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "MINI" | "BIG";
}