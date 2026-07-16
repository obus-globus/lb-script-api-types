import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SoundEngine$PlayResult extends Enum<SoundEngine$PlayResult> {
    static NOT_STARTED: SoundEngine$PlayResult;
    static STARTED: SoundEngine$PlayResult;
    static STARTED_SILENTLY: SoundEngine$PlayResult;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SoundEngine$PlayResult;
    static values(): SoundEngine$PlayResult[];
    private constructor()
    name(): "STARTED" | "STARTED_SILENTLY" | "NOT_STARTED";
}