import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SoundType extends Enum<SoundType> {
    static DEATH: SoundType;
    static HURT: SoundType;
    static IDLE: SoundType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SoundType;
    static values(): (Object | null)[];
    private constructor()
    name(): "IDLE" | "HURT" | "DEATH";
}