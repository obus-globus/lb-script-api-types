import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Interruptible extends Object{
    interrupt(arg0: Thread): void;
    postInterrupt(): void;
}