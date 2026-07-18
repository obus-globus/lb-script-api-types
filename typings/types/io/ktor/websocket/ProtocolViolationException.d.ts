import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { CopyableThrowable } from '../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class ProtocolViolationException extends Exception implements CopyableThrowable<ProtocolViolationException> {
    constructor(violation: string)
    readonly message: string;
    readonly violation: string;
    createCopy(): ProtocolViolationException;
}