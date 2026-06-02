import type { Phaser$QNode } from '../../../java/util/concurrent/Phaser$QNode.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Phaser extends Object {
    constructor()
    constructor(arg0: Phaser)
    constructor(arg0: Phaser, arg1: number)
    constructor(arg0: number)
    // private evenQ: AtomicReference<Phaser$QNode>;
    // private oddQ: AtomicReference<Phaser$QNode>;
    readonly parent: Phaser;
    readonly root: Phaser;
    // private state: number;
    // private abortWait(arg0: number): number;
    arrive(): number;
    arriveAndAwaitAdvance(): number;
    arriveAndDeregister(): number;
    awaitAdvance(arg0: number): number;
    awaitAdvanceInterruptibly(arg0: number): number;
    awaitAdvanceInterruptibly(arg0: number, arg1: number, arg2: TimeUnit): number;
    // private badArrive(arg0: number): string;
    // private badRegister(arg0: number): string;
    bulkRegister(arg0: number): number;
    // private doArrive(arg0: number): number;
    // private doRegister(arg0: number): number;
    forceTermination(): void;
    getArrivedParties(): number;
    getParent(): Phaser;
    getPhase(): number;
    getRegisteredParties(): number;
    getRoot(): Phaser;
    getUnarrivedParties(): number;
    // private internalAwaitAdvance(arg0: number, arg1: Phaser$QNode): number;
    isTerminated(): boolean;
    onAdvance(arg0: number, arg1: number): boolean;
    // private reconcileState(): number;
    register(): number;
    // private releaseWaiters(arg0: number): void;
    // private stateToString(arg0: number): string;
    toString(): string;
}