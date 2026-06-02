import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Padding extends Enum<Padding> {
    static NONE: Padding;
    static SPACE: Padding;
    static ZERO: Padding;
    static getEntries(): Padding[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Padding;
    static values(): (Object | null)[];
    private constructor()
    name(): "NONE" | "ZERO" | "SPACE";
}