import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SoundType extends Enum<SoundType> {
    static DEATH: SoundType;
    static HURT: SoundType;
    static IDLE: SoundType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SoundType;
    static values(): SoundType[];
    private constructor()
    name(): "IDLE" | "HURT" | "DEATH";
}