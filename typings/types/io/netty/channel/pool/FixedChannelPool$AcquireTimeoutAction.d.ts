import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class FixedChannelPool$AcquireTimeoutAction extends Enum<FixedChannelPool$AcquireTimeoutAction> {
    static FAIL: FixedChannelPool$AcquireTimeoutAction;
    static NEW: FixedChannelPool$AcquireTimeoutAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FixedChannelPool$AcquireTimeoutAction;
    static values(): FixedChannelPool$AcquireTimeoutAction[];
    private constructor()
    name(): "NEW" | "FAIL";
}