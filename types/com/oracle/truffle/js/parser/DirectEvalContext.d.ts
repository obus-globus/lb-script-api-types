import type { ClassNode } from '../../../../../com/oracle/js/parser/ir/ClassNode.d.ts'
import type { Scope } from '../../../../../com/oracle/js/parser/ir/Scope.d.ts'
import type { Environment } from '../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { ScriptOrModule } from '../../../../../com/oracle/truffle/js/runtime/objects/ScriptOrModule.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DirectEvalContext extends Object {
    constructor(scope: Scope, env: Environment, enclosingClass: ClassNode, activeScriptOrModule: ScriptOrModule)
    // private activeScriptOrModule: ScriptOrModule;
    // private enclosingClass: ClassNode;
    // private env: Environment;
    // private scope: Scope;
}