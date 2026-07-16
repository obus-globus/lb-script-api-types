import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ModOrigin$Kind extends Enum<ModOrigin$Kind> {
    static NESTED: ModOrigin$Kind;
    static PATH: ModOrigin$Kind;
    static UNKNOWN: ModOrigin$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModOrigin$Kind;
    static values(): ModOrigin$Kind[];
    private constructor()
    name(): "PATH" | "NESTED" | "UNKNOWN";
}