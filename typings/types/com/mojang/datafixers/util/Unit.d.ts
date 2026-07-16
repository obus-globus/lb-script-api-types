import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Unit extends Enum<Unit> {
    static INSTANCE: Unit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Unit;
    static values(): Unit[];
    private constructor()
    toString(): string;
    name(): "INSTANCE";
}