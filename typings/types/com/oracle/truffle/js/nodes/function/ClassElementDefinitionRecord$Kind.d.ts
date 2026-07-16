import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ClassElementDefinitionRecord$Kind extends Enum<ClassElementDefinitionRecord$Kind> {
    static AccessorPair: ClassElementDefinitionRecord$Kind;
    static AutoAccessor: ClassElementDefinitionRecord$Kind;
    static Field: ClassElementDefinitionRecord$Kind;
    static Getter: ClassElementDefinitionRecord$Kind;
    static Method: ClassElementDefinitionRecord$Kind;
    static Setter: ClassElementDefinitionRecord$Kind;
    static StaticBlock: ClassElementDefinitionRecord$Kind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClassElementDefinitionRecord$Kind;
    static values(): ClassElementDefinitionRecord$Kind[];
    private constructor()
    name(): "Method" | "Field" | "Getter" | "Setter" | "AutoAccessor" | "AccessorPair" | "StaticBlock";
}