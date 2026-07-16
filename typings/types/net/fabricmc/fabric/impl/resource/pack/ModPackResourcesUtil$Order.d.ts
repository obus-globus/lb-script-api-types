import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ModPackResourcesUtil$Order extends Enum<ModPackResourcesUtil$Order> {
    static AFTER: ModPackResourcesUtil$Order;
    static BEFORE: ModPackResourcesUtil$Order;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModPackResourcesUtil$Order;
    static values(): ModPackResourcesUtil$Order[];
    private constructor(arg2: string)
    // private jsonKey: string;
    name(): "BEFORE" | "AFTER";
}