import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ClassInfo$SearchType } from '../../../../../org/spongepowered/asm/mixin/transformer/ClassInfo$SearchType.d.ts'
export class ClassInfo$Traversal extends Enum<ClassInfo$Traversal> {
    static ALL: ClassInfo$Traversal;
    static IMMEDIATE: ClassInfo$Traversal;
    static NONE: ClassInfo$Traversal;
    static SUPER: ClassInfo$Traversal;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClassInfo$Traversal;
    static values(): ClassInfo$Traversal[];
    private constructor(arg2: ClassInfo$Traversal, arg3: boolean, arg4: ClassInfo$SearchType)
    // private next: ClassInfo$Traversal;
    readonly searchType: ClassInfo$SearchType;
    // private traverse: boolean;
    canTraverse(): boolean;
    getSearchType(): ClassInfo$SearchType;
    next(): ClassInfo$Traversal;
    name(): "NONE" | "ALL" | "IMMEDIATE" | "SUPER";
}