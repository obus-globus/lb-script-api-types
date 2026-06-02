import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SoundInstance$Attenuation extends Enum<SoundInstance$Attenuation> {
    static LINEAR: SoundInstance$Attenuation;
    static NONE: SoundInstance$Attenuation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SoundInstance$Attenuation;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "LINEAR";
}