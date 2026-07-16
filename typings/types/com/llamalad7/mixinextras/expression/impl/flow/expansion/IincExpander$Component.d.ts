import type { InsnExpander$InsnComponent } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/expansion/InsnExpander$InsnComponent.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class IincExpander$Component extends Enum<IincExpander$Component> implements InsnExpander$InsnComponent {
    static ADD: IincExpander$Component;
    static CST: IincExpander$Component;
    static LOAD: IincExpander$Component;
    static STORE: IincExpander$Component;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IincExpander$Component;
    static values(): IincExpander$Component[];
    private constructor()
    name(): "LOAD" | "CST" | "ADD" | "STORE";
}