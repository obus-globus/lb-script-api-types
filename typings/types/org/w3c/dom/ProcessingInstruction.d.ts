import type { Object } from '../../../java/lang/Object.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface ProcessingInstruction extends Object, Node{
    getData(): string;
    getTarget(): string;
    setData(arg0: string): void;
}