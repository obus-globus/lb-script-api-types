import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Unit extends Enum<Unit> {
    static INSTANCE: Unit;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Unit;
    static values(): Unit[];
    private constructor()
    toString(): string;
    name(): "INSTANCE";
}