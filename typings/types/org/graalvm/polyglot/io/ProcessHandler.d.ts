import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessHandler$ProcessCommand } from '../../../../org/graalvm/polyglot/io/ProcessHandler$ProcessCommand.d.ts'
export interface ProcessHandler extends Object{
    start(command: ProcessHandler$ProcessCommand): Process;
}