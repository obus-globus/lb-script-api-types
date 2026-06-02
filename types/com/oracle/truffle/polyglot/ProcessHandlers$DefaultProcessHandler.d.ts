import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ProcessHandler } from '../../../../org/graalvm/polyglot/io/ProcessHandler.d.ts'
import type { ProcessHandler$ProcessCommand } from '../../../../org/graalvm/polyglot/io/ProcessHandler$ProcessCommand.d.ts'
export class ProcessHandlers$DefaultProcessHandler extends Object implements ProcessHandler {
    private constructor()
    start(command: ProcessHandler$ProcessCommand): Process;
}