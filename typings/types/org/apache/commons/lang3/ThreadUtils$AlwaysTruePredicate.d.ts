import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ThreadUtils$ThreadGroupPredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$ThreadGroupPredicate.d.ts'
import type { ThreadUtils$ThreadPredicate } from '../../../../org/apache/commons/lang3/ThreadUtils$ThreadPredicate.d.ts'
export class ThreadUtils$AlwaysTruePredicate extends Object implements ThreadUtils$ThreadGroupPredicate, ThreadUtils$ThreadPredicate {
    private constructor()
    test(arg0: Thread): boolean;
    test(arg0: ThreadGroup): boolean;
}