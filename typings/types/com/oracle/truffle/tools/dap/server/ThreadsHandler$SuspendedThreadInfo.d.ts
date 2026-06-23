import type { SuspendedEvent } from '../../../../../../com/oracle/truffle/api/debug/SuspendedEvent.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ThreadsHandler$SuspendedThreadInfo extends Object {
    private constructor(null_: ThreadsHandler$SuspendedThreadInfo, threadId: number, event: SuspendedEvent)
    // private event: SuspendedEvent;
    // private executables: (param0: ThreadsHandler$SuspendedThreadInfo) => boolean[];
    // private id2Refs: { [key: number]: Object };
    // private ref2Ids: Map<Object, number>;
    readonly threadId: number;
    getById<T extends unknown>(cls: Class<T>, id: number): T;
    getId(ref: Object): number;
    getSuspendedEvent(): SuspendedEvent;
    getThreadId(): number;
    // private resume(): void;
    // private runExecutables(): void;
}