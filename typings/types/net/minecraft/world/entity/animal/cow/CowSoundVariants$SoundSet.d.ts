import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CowSoundVariants$SoundSet extends Enum<CowSoundVariants$SoundSet> {
    static CLASSIC: CowSoundVariants$SoundSet;
    static MOODY: CowSoundVariants$SoundSet;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CowSoundVariants$SoundSet;
    static values(): (Object | null)[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "MOODY";
}