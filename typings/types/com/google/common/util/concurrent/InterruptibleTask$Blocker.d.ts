import type { InterruptibleTask$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InterruptibleTask } from '../../../../../com/google/common/util/concurrent/InterruptibleTask.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { AbstractOwnableSynchronizer } from '../../../../../java/util/concurrent/locks/AbstractOwnableSynchronizer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InterruptibleTask$Blocker extends AbstractOwnableSynchronizer implements Runnable {
    constructor(arg0: InterruptibleTask<Object>, arg1: InterruptibleTask$1)
    private constructor(task: InterruptibleTask<Object>)
    // private task: InterruptibleTask<Object>;
    getOwner(): Thread;
    run(): void;
    // private setOwner(thread: Thread): void;
    toString(): string;
}