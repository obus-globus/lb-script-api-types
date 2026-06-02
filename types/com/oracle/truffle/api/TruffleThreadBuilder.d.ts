import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ThreadGroup } from '../../../../java/lang/ThreadGroup.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleThreadBuilder extends Object {
    constructor(polyglotLanguageContext: Object, runnable: () => void)
    // private afterLeave: () => void;
    // private beforeEnter: () => void;
    // private polyglotLanguageContext: Object;
    // private runnable: () => void;
    // private stackSize: number;
    // private threadGroup: ThreadGroup;
    // private truffleContext: TruffleContext;
    // private virtual: boolean;
    afterLeave(r: () => void): TruffleThreadBuilder;
    beforeEnter(r: () => void): TruffleThreadBuilder;
    build(): Thread;
    context(innerContext: TruffleContext): TruffleThreadBuilder;
    stackSize(size: number): TruffleThreadBuilder;
    threadGroup(g: ThreadGroup): TruffleThreadBuilder;
    virtual(v: boolean): TruffleThreadBuilder;
}