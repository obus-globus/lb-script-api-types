import type { Introspection } from '../../../../../com/oracle/truffle/api/dsl/Introspection.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Introspection$Provider extends Object{
    getIntrospectionData(): Introspection;
    getIntrospectionData(inlinedParent: Node): Introspection;
    getIntrospectionData(bytecodeNode: Node, bytecodeIndex: number): Introspection;
}