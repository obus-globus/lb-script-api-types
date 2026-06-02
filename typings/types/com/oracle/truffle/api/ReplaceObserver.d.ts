import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface ReplaceObserver extends Object{
    nodeReplaced(oldNode: Node, newNode: Node, reason: CharSequence): boolean;
}