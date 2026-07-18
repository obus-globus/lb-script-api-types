import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CopyableThrowable } from '../../../kotlinx/coroutines/CopyableThrowable.d.ts'
export class FrameTooBigException extends Exception implements CopyableThrowable<FrameTooBigException> {
    constructor(frameSize: number, cause: Throwable | null)
    readonly frameSize: number;
    readonly message: string;
    createCopy(): FrameTooBigException;
}