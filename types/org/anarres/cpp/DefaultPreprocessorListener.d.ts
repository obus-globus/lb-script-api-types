import type { Object } from '../../../java/lang/Object.d.ts'
import type { PreprocessorListener } from '../../../org/anarres/cpp/PreprocessorListener.d.ts'
import type { PreprocessorListener$SourceChangeEvent } from '../../../org/anarres/cpp/PreprocessorListener$SourceChangeEvent.d.ts'
import type { Token } from '../../../org/anarres/cpp/Token.d.ts'
export class DefaultPreprocessorListener extends Object implements PreprocessorListener {
    constructor()
    readonly errors: number;
    readonly warnings: number;
    clear(): void;
    getErrors(): number;
    getWarnings(): number;
    handleError(arg0: Token[], arg1: number, arg2: number, arg3: string): void;
    handleSourceChange(arg0: Token[], arg1: PreprocessorListener$SourceChangeEvent): void;
    handleWarning(arg0: Token[], arg1: number, arg2: number, arg3: string): void;
    print(arg0: string): void;
}