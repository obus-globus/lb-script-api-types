import type { CompilationEvent } from '../../../../../com/oracle/truffle/runtime/jfr/CompilationEvent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JFRListener$CompilationData extends Object {
    constructor(event: CompilationEvent)
    // private event: CompilationEvent;
    // private partialEvalNodeCount: number;
    // private partialEvaluationSuccess: boolean;
    // private timeCompilationStarted: number;
    // private timePartialEvaluationFinished: number;
    finish(): number;
}