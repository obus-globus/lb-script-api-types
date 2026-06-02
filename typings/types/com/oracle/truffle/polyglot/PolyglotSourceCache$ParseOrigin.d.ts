import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotSourceCache$ParseOrigin extends Enum<PolyglotSourceCache$ParseOrigin> {
    static EMBEDDING: PolyglotSourceCache$ParseOrigin;
    static INSTRUMENT: PolyglotSourceCache$ParseOrigin;
    static LANGUAGE: PolyglotSourceCache$ParseOrigin;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolyglotSourceCache$ParseOrigin;
    static values(): (Object | null)[];
    private constructor()
    name(): "LANGUAGE" | "INSTRUMENT" | "EMBEDDING";
}