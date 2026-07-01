import type { ThreadDeathWatcher$Entry } from '../../../io/netty/util/ThreadDeathWatcher$Entry.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { PrivilegedAction } from '../../../java/security/PrivilegedAction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadDeathWatcher$Watcher extends Object implements Runnable {
    constructor(arg0: () => void)
    // private watchees: ThreadDeathWatcher$Entry[];
    // private fetchWatchees(): void;
    // private notifyWatchees(): void;
    run(): void;
}