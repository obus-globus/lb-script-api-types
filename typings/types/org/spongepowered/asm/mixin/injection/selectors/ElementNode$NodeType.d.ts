import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ElementNode$NodeType extends Enum<ElementNode$NodeType> {
    static FIELD: ElementNode$NodeType;
    static FIELD_INSN: ElementNode$NodeType;
    static INVOKEDYNAMIC_INSN: ElementNode$NodeType;
    static METHOD: ElementNode$NodeType;
    static METHOD_INSN: ElementNode$NodeType;
    static UNDEFINED: ElementNode$NodeType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ElementNode$NodeType;
    static values(): ElementNode$NodeType[];
    private constructor(arg2: boolean, arg3: boolean, arg4: boolean)
    hasField: boolean;
    hasInsn: boolean;
    hasMethod: boolean;
    name(): "UNDEFINED" | "METHOD" | "FIELD" | "METHOD_INSN" | "FIELD_INSN" | "INVOKEDYNAMIC_INSN";
}