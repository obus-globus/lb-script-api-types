import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { NodeFactory } from '../../../../../com/oracle/truffle/js/nodes/NodeFactory.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SnapshotProvider extends Object{
    apply(nodeFactory: NodeFactory, context: JSContext, source: Source): Object;
}