import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Dns } from '../../../okhttp3/Dns.d.ts'
import type { Dns$Call } from '../../../okhttp3/Dns$Call.d.ts'
import type { Dns$Callback } from '../../../okhttp3/Dns$Callback.d.ts'
import type { Dns$Request } from '../../../okhttp3/Dns$Request.d.ts'
import type { Task } from '../../../okhttp3/internal/concurrent/Task.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { LookupDnsCall$State } from '../../../okhttp3/internal/dns/LookupDnsCall$State.d.ts'
export class LookupDnsCall extends Task implements Dns$Call {
    constructor(taskRunner: TaskRunner, delegate: Dns, request: Dns$Request)
    // private delegate: Dns;
    readonly request: Dns$Request;
    // private state: AtomicReference<LookupDnsCall$State>;
    // private taskRunner: TaskRunner;
    cancel(): void;
    enqueue(callback: Dns$Callback): void;
    isCanceled(): boolean;
    runOnce(): number;
}