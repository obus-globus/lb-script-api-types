import type { IOException } from '../../../java/io/IOException.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Dns$Call } from '../../../okhttp3/Dns$Call.d.ts'
import type { Dns$Callback } from '../../../okhttp3/Dns$Callback.d.ts'
import type { Dns$Record } from '../../../okhttp3/Dns$Record.d.ts'
import type { Dns$Request } from '../../../okhttp3/Dns$Request.d.ts'
import type { TaskRunner } from '../../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { DnsMessage } from '../../../okhttp3/internal/dns/DnsMessage.d.ts'
import type { DnsQuery } from '../../../okhttp3/internal/dns/DnsQuery.d.ts'
import type { DnsQuery$Factory } from '../../../okhttp3/internal/dns/DnsQuery$Factory.d.ts'
import type { Question } from '../../../okhttp3/internal/dns/Question.d.ts'
import type { StateMachineDnsCall$State } from '../../../okhttp3/internal/dns/StateMachineDnsCall$State.d.ts'
export class StateMachineDnsCall extends Object implements Dns$Call {
    constructor(taskRunner: TaskRunner, request: Dns$Request, queryFactory: DnsQuery$Factory, includeIPv6: boolean, includeServiceMetadata: boolean)
    // private includeIPv6: boolean;
    // private includeServiceMetadata: boolean;
    // private queryFactory: DnsQuery$Factory;
    readonly request: Dns$Request;
    // private state: AtomicReference<StateMachineDnsCall$State>;
    // private taskRunner: TaskRunner;
    cancel(): void;
    enqueue(callback: Dns$Callback): void;
    isCanceled(): boolean;
    // private updateStateAndCallCallbacks(completedQuery: DnsQuery | null, newRecords: Dns$Record[], newException: IOException | null, lockHeldByThisThread: boolean): void;
    // private updateStateAndCallCallbacks(question: Question, completedQuery: DnsQuery, dnsResponse: DnsMessage): void;
}