import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Represents an operation that does not return a result and can only be executed once when {@link canExecute} returns true.
 * This is protected, so all future calls won't execute the actual {@link action}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt:23}
 */
export class RestrictedSingleUseAction extends Object {
    constructor(canExecute: () => kotlin.Boolean, action: () => void)
    // private action: () => void;
    // private canExecute: () => kotlin.Boolean;
    // private isExecuted: boolean;
    invoke(): void;
}