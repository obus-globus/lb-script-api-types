import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SequenceNode extends Object{
    getStatements(): JavaScriptNode[];
}