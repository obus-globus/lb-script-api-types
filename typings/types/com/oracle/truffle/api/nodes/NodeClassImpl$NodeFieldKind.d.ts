import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeClassImpl$NodeFieldKind extends Enum<NodeClassImpl$NodeFieldKind> {
    static CHILD: NodeClassImpl$NodeFieldKind;
    static CHILDREN: NodeClassImpl$NodeFieldKind;
    static CLONEABLE: NodeClassImpl$NodeFieldKind;
    static DATA: NodeClassImpl$NodeFieldKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NodeClassImpl$NodeFieldKind;
    static values(): NodeClassImpl$NodeFieldKind[];
    private constructor()
    name(): "CHILD" | "CHILDREN" | "CLONEABLE" | "DATA";
}