import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Whence extends Enum<Whence> {
    static ABSOLUTE: Whence;
    static END: Whence;
    static RELATIVE: Whence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Whence;
    static values(): Whence[];
    private constructor()
    name(): "ABSOLUTE" | "RELATIVE" | "END";
}