import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CowSoundVariants$SoundSet extends Enum<CowSoundVariants$SoundSet> {
    static CLASSIC: CowSoundVariants$SoundSet;
    static MOODY: CowSoundVariants$SoundSet;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CowSoundVariants$SoundSet;
    static values(): CowSoundVariants$SoundSet[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "MOODY";
}