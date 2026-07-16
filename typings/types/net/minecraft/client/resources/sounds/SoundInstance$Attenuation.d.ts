import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SoundInstance$Attenuation extends Enum<SoundInstance$Attenuation> {
    static LINEAR: SoundInstance$Attenuation;
    static NONE: SoundInstance$Attenuation;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SoundInstance$Attenuation;
    static values(): SoundInstance$Attenuation[];
    private constructor()
    name(): "NONE" | "LINEAR";
}