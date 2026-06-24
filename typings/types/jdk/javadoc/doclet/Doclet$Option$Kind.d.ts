import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Doclet$Option$Kind extends Enum<Doclet$Option$Kind> {
    static EXTENDED: Doclet$Option$Kind;
    static OTHER: Doclet$Option$Kind;
    static STANDARD: Doclet$Option$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Doclet$Option$Kind;
    static values(): (Object | null)[];
    private constructor()
    name(): "EXTENDED" | "STANDARD" | "OTHER";
}