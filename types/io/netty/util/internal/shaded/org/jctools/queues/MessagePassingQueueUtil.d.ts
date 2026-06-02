import type { MessagePassingQueue } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue.d.ts'
import type { MessagePassingQueue$Consumer } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Consumer.d.ts'
import type { MessagePassingQueue$ExitCondition } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$ExitCondition.d.ts'
import type { MessagePassingQueue$Supplier } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Supplier.d.ts'
import type { MessagePassingQueue$WaitStrategy } from '../../../../../../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$WaitStrategy.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class MessagePassingQueueUtil extends Object {
    static drain(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Consumer<Object>): number;
    static drain(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Consumer<Object>, paramarg2: number): number;
    static drain(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Consumer<Object>, paramarg2: MessagePassingQueue$WaitStrategy, paramarg3: MessagePassingQueue$ExitCondition): void;
    static fill(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Supplier<Object>, paramarg2: MessagePassingQueue$WaitStrategy, paramarg3: MessagePassingQueue$ExitCondition): void;
    static fillBounded(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Supplier<Object>): number;
    static fillInBatchesToLimit(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Supplier<Object>, paramarg2: number, paramarg3: number): number;
    static fillUnbounded(paramarg0: MessagePassingQueue<Object>, paramarg1: MessagePassingQueue$Supplier<Object>): number;
    constructor()
}