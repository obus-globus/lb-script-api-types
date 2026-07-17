import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PatchShaderType } from '../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
export class ShaderPrinter$ProgramPrintBuilder extends Object {
    constructor(arg0: string)
    // private done: boolean;
    // private isActive: boolean;
    // private name: string;
    // private prefix: string;
    // private sources: string[];
    // private addItem(arg0: string, arg1: string): void;
    addJson(arg0: string): ShaderPrinter$ProgramPrintBuilder;
    addSource(arg0: PatchShaderType, arg1: string): ShaderPrinter$ProgramPrintBuilder;
    addSources(arg0: JavaMap<PatchShaderType, string>): ShaderPrinter$ProgramPrintBuilder;
    print(): void;
    setName(arg0: string): ShaderPrinter$ProgramPrintBuilder;
}