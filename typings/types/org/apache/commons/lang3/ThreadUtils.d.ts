import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadUtils$AlwaysTruePredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$AlwaysTruePredicate.d.ts'
import type { ThreadUtils$ThreadGroupPredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$ThreadGroupPredicate.d.ts'
import type { ThreadUtils$ThreadPredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$ThreadPredicate.d.ts'
export class ThreadUtils extends Object {
    static ALWAYS_TRUE_PREDICATE: ThreadUtils$AlwaysTruePredicate;
    static findThreadById(paramarg0: number): Thread;
    static findThreadById(paramarg0: number, paramarg1: string): Thread;
    static findThreadById(paramarg0: number, paramarg1: ThreadGroup): Thread;
    static findThreadGroups(paramarg0: ThreadGroup, paramarg1: boolean, paramarg2: (param0: ThreadGroup) => kotlin.Boolean): E[];
    static findThreadGroups(paramarg0: ThreadGroup, paramarg1: boolean, paramarg2: (param0: ThreadGroup) => kotlin.Boolean): E[];
    static findThreadGroups(paramarg0: (param0: ThreadGroup) => kotlin.Boolean): E[];
    static findThreadGroups(paramarg0: (param0: ThreadGroup) => kotlin.Boolean): E[];
    static findThreadGroupsByName(paramarg0: string): E[];
    static findThreads(paramarg0: ThreadGroup, paramarg1: boolean, paramarg2: (param0: Thread) => kotlin.Boolean): E[];
    static findThreads(paramarg0: ThreadGroup, paramarg1: boolean, paramarg2: (param0: Thread) => kotlin.Boolean): E[];
    static findThreads(paramarg0: (param0: Thread) => kotlin.Boolean): E[];
    static findThreads(paramarg0: (param0: Thread) => kotlin.Boolean): E[];
    static findThreadsByName(paramarg0: string): E[];
    static findThreadsByName(paramarg0: string, paramarg1: string): E[];
    static findThreadsByName(paramarg0: string, paramarg1: ThreadGroup): E[];
    static getAllThreadGroups(): E[];
    static getAllThreads(): E[];
    static getSystemThreadGroup(): ThreadGroup;
    static join(paramarg0: Thread, paramarg1: Duration): void;
    static sleep(paramarg0: Duration): void;
    static sleepQuietly(paramarg0: Duration): void;
    constructor()
}