import type { Object } from '../../../java/lang/Object.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface NodeList extends Object{
    getLength(): number;
    item(arg0: number): Node;
}