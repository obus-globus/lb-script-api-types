import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Sound$Type extends Enum<Sound$Type> {
    static FILE: Sound$Type;
    static SOUND_EVENT: Sound$Type;
    static getByName(paramname: string): Sound$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Sound$Type;
    static values(): (Object | null)[];
    private constructor(name: string)
    // private name: string;
    name(): "FILE" | "SOUND_EVENT";
}