import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotSourceCache$ParseOrigin extends Enum<PolyglotSourceCache$ParseOrigin> {
    static EMBEDDING: PolyglotSourceCache$ParseOrigin;
    static INSTRUMENT: PolyglotSourceCache$ParseOrigin;
    static LANGUAGE: PolyglotSourceCache$ParseOrigin;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotSourceCache$ParseOrigin;
    static values(): PolyglotSourceCache$ParseOrigin[];
    private constructor()
    name(): "LANGUAGE" | "INSTRUMENT" | "EMBEDDING";
}