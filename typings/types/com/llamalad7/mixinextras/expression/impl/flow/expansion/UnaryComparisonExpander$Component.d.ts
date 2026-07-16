import type { InsnExpander$InsnComponent } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$InsnComponent.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class UnaryComparisonExpander$Component extends Enum<UnaryComparisonExpander$Component> implements InsnExpander$InsnComponent {
    static CST: UnaryComparisonExpander$Component;
    static JUMP: UnaryComparisonExpander$Component;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnaryComparisonExpander$Component;
    static values(): UnaryComparisonExpander$Component[];
    private constructor()
    name(): "CST" | "JUMP";
}