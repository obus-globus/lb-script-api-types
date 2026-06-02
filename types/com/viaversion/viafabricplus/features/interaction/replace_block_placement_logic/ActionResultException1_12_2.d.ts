import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { InteractionResult } from '../../../../../../net/minecraft/world/InteractionResult.d.ts'
export class ActionResultException1_12_2 extends RuntimeException {
    constructor(arg0: InteractionResult)
    readonly actionResult: InteractionResult;
    fillInStackTrace(): Throwable;
    getActionResult(): InteractionResult;
}