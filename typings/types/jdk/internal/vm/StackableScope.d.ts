import type { Class } from '../../../java/lang/Class.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class StackableScope extends Object {
    static popAll(): void;
    constructor()
    constructor(arg0: boolean)
    // private owner: Thread;
    // private previous: StackableScope;
    enclosingScope(): StackableScope;
    enclosingScope<T extends StackableScope>(arg0: Class<T>): T;
    // private next(): StackableScope;
    owner(): Thread;
    popForcefully(): boolean;
    previous(): StackableScope;
    push(): StackableScope;
    tryClose(): boolean;
    tryPop(): boolean;
    // private unlink(): void;
}