import type { MessagePassingQueue } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue.d.ts'
import type { MessagePassingQueue$Consumer } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Consumer.d.ts'
import type { MessagePassingQueue$ExitCondition } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$ExitCondition.d.ts'
import type { MessagePassingQueue$Supplier } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$Supplier.d.ts'
import type { MessagePassingQueue$WaitStrategy } from '../../../io/netty/util/internal/shaded/org/jctools/queues/MessagePassingQueue$WaitStrategy.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Recycler$BlockingMessageQueue<T extends Object | number | string | boolean> extends Object implements MessagePassingQueue<T> {
    static UNBOUNDED_CAPACITY: number;
    constructor(arg0: number)
    // private deque: T[];
    // private maxCapacity: number;
    capacity(): number;
    clear(): void;
    drain(arg0: MessagePassingQueue$Consumer<T>): number;
    drain(arg0: MessagePassingQueue$Consumer<T>, arg1: MessagePassingQueue$WaitStrategy, arg2: MessagePassingQueue$ExitCondition): void;
    drain(arg0: MessagePassingQueue$Consumer<T>, arg1: number): number;
    fill(arg0: MessagePassingQueue$Supplier<T>): number;
    fill(arg0: MessagePassingQueue$Supplier<T>, arg1: MessagePassingQueue$WaitStrategy, arg2: MessagePassingQueue$ExitCondition): void;
    fill(arg0: MessagePassingQueue$Supplier<T>, arg1: number): number;
    isEmpty(): boolean;
    offer(arg0: T): boolean;
    peek(): T;
    poll(): T;
    relaxedOffer(arg0: T): boolean;
    relaxedPeek(): T;
    relaxedPoll(): T;
    size(): number;
}