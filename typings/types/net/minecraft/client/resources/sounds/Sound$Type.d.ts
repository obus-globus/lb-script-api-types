import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Sound$Type extends Enum<Sound$Type> {
    static FILE: Sound$Type;
    static SOUND_EVENT: Sound$Type;
    static getByName(paramname: string): Sound$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Sound$Type;
    static values(): Sound$Type[];
    private constructor(name: string)
    // private name: string;
    name(): "FILE" | "SOUND_EVENT";
}