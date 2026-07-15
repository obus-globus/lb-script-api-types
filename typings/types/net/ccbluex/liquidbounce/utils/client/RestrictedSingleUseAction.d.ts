import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Represents an operation that does not return a result and can only be executed once when {@link canExecute} returns true.
 * This is protected, so all future calls won't execute the actual {@link action}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt:27}
 */
export class RestrictedSingleUseAction extends Object {
    constructor(canExecute: () => boolean, action: () => void)
    // private action: () => void;
    // private canExecute: () => boolean;
    // private isExecuted: boolean;
    invoke(): void;
}