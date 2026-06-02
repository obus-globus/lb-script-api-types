import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CatSoundVariants$SoundSet extends Enum<CatSoundVariants$SoundSet> {
    static CLASSIC: CatSoundVariants$SoundSet;
    static ROYAL: CatSoundVariants$SoundSet;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CatSoundVariants$SoundSet;
    static values(): (Object | null)[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "ROYAL";
}