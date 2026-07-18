import type { IllegalStateException } from '../../../../java/lang/IllegalStateException.d.ts'
import type { CopyableThrowable } from '../../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class BaseApplicationResponse$BodyLengthIsTooLong extends IllegalStateException implements CopyableThrowable<BaseApplicationResponse$BodyLengthIsTooLong> {
    constructor(expected: number)
    // private expected: number;
    createCopy(): BaseApplicationResponse$BodyLengthIsTooLong;
}