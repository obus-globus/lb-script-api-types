import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EncodeDefault$Mode extends Enum<EncodeDefault$Mode> {
    static ALWAYS: EncodeDefault$Mode;
    static NEVER: EncodeDefault$Mode;
    static getEntries(): EncodeDefault$Mode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): EncodeDefault$Mode;
    static values(): EncodeDefault$Mode[];
    private constructor()
    name(): "ALWAYS" | "NEVER";
}