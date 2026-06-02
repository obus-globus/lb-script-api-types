import type { Object } from '../../../java/lang/Object.d.ts'
import type { Node } from '../../../org/w3c/dom/Node.d.ts'
export interface UserDataHandler extends Object{
    handle(arg0: number, arg1: string, arg2: Object, arg3: Node, arg4: Node): void;
}