import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class GenericThread extends Object implements Runnable {
    constructor(name: string)
    // private name: string;
    running: boolean;
    // private thread: Thread;
    isRunning(): boolean;
    run(): void;
    start(): boolean;
    stop(): void;
}