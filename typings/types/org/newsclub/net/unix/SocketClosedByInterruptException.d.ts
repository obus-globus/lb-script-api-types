import type { ClosedByInterruptException } from '../../../../java/nio/channels/ClosedByInterruptException.d.ts'
import type { SocketClosedException } from '../../../../org/newsclub/net/unix/SocketClosedException.d.ts'
export class SocketClosedByInterruptException extends SocketClosedException {
    private constructor()
    asClosedByInterruptException(): ClosedByInterruptException;
}