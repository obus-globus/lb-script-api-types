import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class BidiTransform$Order extends Enum<BidiTransform$Order> {
    static LOGICAL: BidiTransform$Order;
    static VISUAL: BidiTransform$Order;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BidiTransform$Order;
    static values(): BidiTransform$Order[];
    private constructor()
    name(): "LOGICAL" | "VISUAL";
}