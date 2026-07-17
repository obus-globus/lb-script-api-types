import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class PreviousInjectorInsns extends Enum<PreviousInjectorInsns> {
    static COMPARISON_WRAPPER: PreviousInjectorInsns;
    static DUPED_FACTORY_REDIRECT: PreviousInjectorInsns;
    static DYNAMIC_INSTANCEOF_REDIRECT: PreviousInjectorInsns;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PreviousInjectorInsns;
    static values(): PreviousInjectorInsns[];
    private constructor(arg2: string)
    // private description: string;
    getLast(arg0: AbstractInsnNode): AbstractInsnNode;
    getPredicates(): (param0: AbstractInsnNode) => boolean[];
    moveNodes(arg0: AbstractInsnNode[], arg1: AbstractInsnNode[], arg2: AbstractInsnNode): void;
    name(): "DYNAMIC_INSTANCEOF_REDIRECT" | "DUPED_FACTORY_REDIRECT" | "COMPARISON_WRAPPER";
}