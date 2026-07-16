import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Holder$Kind extends Enum<Holder$Kind> {
    static DIRECT: Holder$Kind;
    static REFERENCE: Holder$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Holder$Kind;
    static values(): Holder$Kind[];
    private constructor()
    name(): "REFERENCE" | "DIRECT";
}