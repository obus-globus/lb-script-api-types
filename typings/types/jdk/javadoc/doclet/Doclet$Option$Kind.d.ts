import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Doclet$Option$Kind extends Enum<Doclet$Option$Kind> {
    static EXTENDED: Doclet$Option$Kind;
    static OTHER: Doclet$Option$Kind;
    static STANDARD: Doclet$Option$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Doclet$Option$Kind;
    static values(): Doclet$Option$Kind[];
    private constructor()
    name(): "EXTENDED" | "STANDARD" | "OTHER";
}