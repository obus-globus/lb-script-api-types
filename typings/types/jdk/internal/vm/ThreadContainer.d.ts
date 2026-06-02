import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { ScopedValueContainer$BindingsSnapshot } from '../../../jdk/internal/vm/ScopedValueContainer$BindingsSnapshot.d.ts'
import type { StackableScope } from '../../../jdk/internal/vm/StackableScope.d.ts'
export abstract class ThreadContainer extends StackableScope {
    static popAll(): void;
    constructor(arg0: boolean)
    add(arg0: Thread): void;
    children(): Stream<ThreadContainer>;
    name(): string;
    onExit(arg0: Thread): void;
    onStart(arg0: Thread): void;
    parent(): ThreadContainer;
    remove(arg0: Thread): void;
    scopedValueBindings(): ScopedValueContainer$BindingsSnapshot;
    threadCount(): number;
    threads(): Stream<Thread>;
    toString(): string;
}