import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Padding extends Enum<Padding> {
    static NONE: Padding;
    static SPACE: Padding;
    static ZERO: Padding;
    static getEntries(): Padding[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Padding;
    static values(): Padding[];
    private constructor()
    name(): "NONE" | "ZERO" | "SPACE";
}