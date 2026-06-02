import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShaderPrinter$ProgramPrintBuilder } from '../../../../../net/irisshaders/iris/pipeline/transform/ShaderPrinter$ProgramPrintBuilder.d.ts'
export class ShaderPrinter extends Object {
    static deleteIfClearing(): void;
    static printProgram(paramarg0: string): ShaderPrinter$ProgramPrintBuilder;
    static resetPrintState(): void;
    constructor()
}