import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Holder$Kind extends Enum<Holder$Kind> {
    static DIRECT: Holder$Kind;
    static REFERENCE: Holder$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Holder$Kind;
    static values(): Holder$Kind[];
    private constructor()
    name(): "REFERENCE" | "DIRECT";
}