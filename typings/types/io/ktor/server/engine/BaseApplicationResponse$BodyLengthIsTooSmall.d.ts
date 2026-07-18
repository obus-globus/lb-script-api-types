import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class BaseApplicationResponse$BodyLengthIsTooSmall extends IllegalStateException implements CopyableThrowable<BaseApplicationResponse$BodyLengthIsTooSmall> {
    constructor(expected: number, actual: number)
    // private actual: number;
    // private expected: number;
    createCopy(): BaseApplicationResponse$BodyLengthIsTooSmall;
}