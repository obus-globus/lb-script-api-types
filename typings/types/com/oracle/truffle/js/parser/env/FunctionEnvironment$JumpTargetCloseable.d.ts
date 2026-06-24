import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { BreakTarget } from '../../../../../../com/oracle/truffle/js/nodes/control/BreakTarget.d.ts'
import type { FunctionEnvironment } from '../../../../../../com/oracle/truffle/js/parser/env/FunctionEnvironment.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FunctionEnvironment$JumpTargetCloseable<T extends BreakTarget> extends Object implements AutoCloseable {
    constructor(null_: FunctionEnvironment, target: T)
    // private prevBreakCount: number;
    // private prevContinueCount: number;
    readonly target: T;
    close(): void;
    getTarget(): T;
    // private hasBreak(): boolean;
    // private hasContinue(): boolean;
    wrapBreakTargetNode(child: JavaScriptNode): JavaScriptNode;
    wrapContinueTargetNode(child: JavaScriptNode): JavaScriptNode;
    wrapLabelBreakTargetNode(child: JavaScriptNode): JavaScriptNode;
}