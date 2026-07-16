import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ChickenSoundVariants$SoundSet extends Enum<ChickenSoundVariants$SoundSet> {
    static CLASSIC: ChickenSoundVariants$SoundSet;
    static PICKY: ChickenSoundVariants$SoundSet;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ChickenSoundVariants$SoundSet;
    static values(): ChickenSoundVariants$SoundSet[];
    private constructor(identifier: string, soundEventIdentifier: string)
    readonly identifier: string;
    readonly soundEventIdentifier: string;
    getIdentifier(): string;
    getSoundEventIdentifier(): string;
    name(): "CLASSIC" | "PICKY";
}