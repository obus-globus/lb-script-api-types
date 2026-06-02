import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class NodeClassImpl$NodeFieldKind extends Enum<NodeClassImpl$NodeFieldKind> {
    static CHILD: NodeClassImpl$NodeFieldKind;
    static CHILDREN: NodeClassImpl$NodeFieldKind;
    static CLONEABLE: NodeClassImpl$NodeFieldKind;
    static DATA: NodeClassImpl$NodeFieldKind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NodeClassImpl$NodeFieldKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "CHILD" | "CHILDREN" | "CLONEABLE" | "DATA";
}