import type { MessagePassingQueue } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue.d.ts'
import type { MessagePassingQueue$Consumer } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Consumer.d.ts'
import type { MessagePassingQueue$ExitCondition } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$ExitCondition.d.ts'
import type { MessagePassingQueue$Supplier } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Supplier.d.ts'
import type { MessagePassingQueue$WaitStrategy } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$WaitStrategy.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class MessagePassingQueueUtil extends Object {
    static drain<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Consumer<E>): number;
    static drain<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Consumer<E>, paramarg2: number): number;
    static drain<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Consumer<E>, paramarg2: MessagePassingQueue$WaitStrategy, paramarg3: MessagePassingQueue$ExitCondition): void;
    static fill<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Supplier<E>, paramarg2: MessagePassingQueue$WaitStrategy, paramarg3: MessagePassingQueue$ExitCondition): void;
    static fillBounded<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Supplier<E>): number;
    static fillInBatchesToLimit<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Supplier<E>, paramarg2: number, paramarg3: number): number;
    static fillUnbounded<E extends unknown>(paramarg0: MessagePassingQueue<E>, paramarg1: MessagePassingQueue$Supplier<E>): number;
    constructor()
}