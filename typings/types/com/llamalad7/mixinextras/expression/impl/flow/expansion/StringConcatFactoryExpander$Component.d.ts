import type { InsnExpander$InsnComponent } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$InsnComponent.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class StringConcatFactoryExpander$Component extends Enum<StringConcatFactoryExpander$Component> implements InsnExpander$InsnComponent {
    static TO_STRING: StringConcatFactoryExpander$Component;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StringConcatFactoryExpander$Component;
    static values(): StringConcatFactoryExpander$Component[];
    private constructor()
    name(): "TO_STRING";
}