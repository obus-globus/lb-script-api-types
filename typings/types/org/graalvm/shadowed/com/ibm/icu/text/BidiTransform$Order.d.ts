import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BidiTransform$Order extends Enum<BidiTransform$Order> {
    static LOGICAL: BidiTransform$Order;
    static VISUAL: BidiTransform$Order;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BidiTransform$Order;
    static values(): (Object | null)[];
    private constructor()
    name(): "LOGICAL" | "VISUAL";
}