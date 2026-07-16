import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NarratedElementType extends Enum<NarratedElementType> {
    static HINT: NarratedElementType;
    static POSITION: NarratedElementType;
    static TITLE: NarratedElementType;
    static USAGE: NarratedElementType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NarratedElementType;
    static values(): NarratedElementType[];
    private constructor()
    name(): "TITLE" | "POSITION" | "HINT" | "USAGE";
}