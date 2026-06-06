import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Represents an operation that does not return a result and can only be executed once when {@link canExecute} returns true.
 * This is protected, so all future calls won't execute the actual {@link action}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt:23}
 */
export class RestrictedSingleUseAction extends Object {
    constructor(canExecute: () => kotlin.Boolean, action: () => void)
    // private action: () => void;
    // private canExecute: () => kotlin.Boolean;
    // private isExecuted: boolean;
    invoke(): void;
}