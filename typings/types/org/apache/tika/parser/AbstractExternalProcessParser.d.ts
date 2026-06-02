import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export abstract class AbstractExternalProcessParser extends Object implements Parser {
    constructor()
    register(arg0: Process): string;
    release(arg0: string): Process;
}