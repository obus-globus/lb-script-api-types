import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GraalJSTranslator } from '../../../../../com/oracle/truffle/js/parser/GraalJSTranslator.d.ts'
import type { Environment } from '../../../../../com/oracle/truffle/js/parser/env/Environment.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GraalJSTranslator$EnvironmentCloseable extends Object implements AutoCloseable {
    constructor(null_: GraalJSTranslator, newEnv: Environment)
    // private newEnv: Environment;
    // private prevEnv: Environment;
    // private wrappedInBlockScopeNode: number;
    close(): void;
    wrapBlockScope(block: JavaScriptNode): JavaScriptNode;
}