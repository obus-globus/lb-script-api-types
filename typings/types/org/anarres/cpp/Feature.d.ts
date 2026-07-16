import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Feature extends Enum<Feature> {
    static CSYNTAX: Feature;
    static DEBUG: Feature;
    static DIGRAPHS: Feature;
    static INCLUDENEXT: Feature;
    static KEEPALLCOMMENTS: Feature;
    static KEEPCOMMENTS: Feature;
    static LINEMARKERS: Feature;
    static OBJCSYNTAX: Feature;
    static PRAGMA_ONCE: Feature;
    static TRIGRAPHS: Feature;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Feature;
    static values(): Feature[];
    private constructor()
    name(): "DIGRAPHS" | "TRIGRAPHS" | "LINEMARKERS" | "CSYNTAX" | "KEEPCOMMENTS" | "KEEPALLCOMMENTS" | "DEBUG" | "OBJCSYNTAX" | "INCLUDENEXT" | "PRAGMA_ONCE";
}