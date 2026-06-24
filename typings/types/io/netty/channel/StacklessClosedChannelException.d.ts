import type { Class } from '../../../java/lang/Class.d.ts'
import type { ClosedChannelException } from '../../../java/nio/channels/ClosedChannelException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class StacklessClosedChannelException extends ClosedChannelException {
    static newInstance(paramarg0: Class<Object>, paramarg1: string): StacklessClosedChannelException;
    private constructor()
    fillInStackTrace(): Throwable;
}