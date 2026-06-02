import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { ThreadContainer } from '../../../jdk/internal/vm/ThreadContainer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SharedThreadContainer extends ThreadContainer implements AutoCloseable {
    static create(paramarg0: string): SharedThreadContainer;
    static create(paramarg0: ThreadContainer, paramarg1: string): SharedThreadContainer;
    static popAll(): void;
    private constructor(arg0: string)
    // private closed: boolean;
    // private key: Object;
    // private name: string;
    // private virtualThreads: Thread[];
    close(): void;
    name(): string;
    onExit(arg0: Thread): void;
    onStart(arg0: Thread): void;
    owner(): Thread;
    start(arg0: Thread): void;
    threads(): Stream<Thread>;
}