import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NarratedElementType extends Enum<NarratedElementType> {
    static HINT: NarratedElementType;
    static POSITION: NarratedElementType;
    static TITLE: NarratedElementType;
    static USAGE: NarratedElementType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NarratedElementType;
    static values(): (Object | null)[];
    private constructor()
    name(): "TITLE" | "POSITION" | "HINT" | "USAGE";
}