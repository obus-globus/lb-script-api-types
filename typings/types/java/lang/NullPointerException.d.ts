import type { RuntimeException } from '../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export class NullPointerException extends RuntimeException {
    constructor()
    constructor(arg0: string)
    // private extendedMessage: string;
    // private extendedMessageState: number;
    readonly message: string | null;
    fillInStackTrace(): Throwable;
    // private getExtendedNPEMessage(): string;
}