import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class JSTags$ControlFlowRootTag$Type extends Enum<JSTags$ControlFlowRootTag$Type> {
    static AsyncFunction: JSTags$ControlFlowRootTag$Type;
    static Conditional: JSTags$ControlFlowRootTag$Type;
    static DoWhileIteration: JSTags$ControlFlowRootTag$Type;
    static ExceptionHandler: JSTags$ControlFlowRootTag$Type;
    static ForAwaitOfIteration: JSTags$ControlFlowRootTag$Type;
    static ForInIteration: JSTags$ControlFlowRootTag$Type;
    static ForIteration: JSTags$ControlFlowRootTag$Type;
    static ForOfIteration: JSTags$ControlFlowRootTag$Type;
    static WhileIteration: JSTags$ControlFlowRootTag$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JSTags$ControlFlowRootTag$Type;
    static values(): JSTags$ControlFlowRootTag$Type[];
    private constructor()
    name(): "Conditional" | "ExceptionHandler" | "ForOfIteration" | "ForAwaitOfIteration" | "ForInIteration" | "ForIteration" | "DoWhileIteration" | "WhileIteration" | "AsyncFunction";
}