import type { Object } from '../../../java/lang/Object.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface NamedNodeMap extends Object{
    getLength(): number;
    getNamedItem(arg0: string): Node;
    getNamedItemNS(arg0: string, arg1: string): Node;
    item(arg0: number): Node;
    removeNamedItem(arg0: string): Node;
    removeNamedItemNS(arg0: string, arg1: string): Node;
    setNamedItem(arg0: Node): Node;
    setNamedItemNS(arg0: Node): Node;
}