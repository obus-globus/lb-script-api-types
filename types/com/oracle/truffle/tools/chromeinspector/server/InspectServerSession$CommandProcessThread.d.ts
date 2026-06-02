import type { Command } from '../../../../../../com/oracle/truffle/tools/chromeinspector/commands/Command.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectServerSession$CommandProcessThread extends Object implements Runnable {
    constructor(null_: InspectServerSession$CommandProcessThread)
    // private commands: Command[];
    // private disposed: boolean;
    // private thread: Thread;
    dispose(): void;
    isClosed(): boolean;
    // private join(): void;
    push(cmd: Command): void;
    run(): void;
    start(): void;
}