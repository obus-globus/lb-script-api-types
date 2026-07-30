import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * Represents an operation that does not return a result and can only be executed once when {@link canExecute} returns true.
 * This is protected, so all future calls won't execute the actual {@link action}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/RestrictedSingleUseAction.kt:27}
 */
export class RestrictedSingleUseAction extends Object {
    constructor(canExecute: () => boolean, action: () => void)
    // private action: () => void;
    // private canExecute: () => boolean;
    // private isExecuted: boolean;
    invoke(): void;
}