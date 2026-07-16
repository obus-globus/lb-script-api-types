import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HoverEventAction extends Enum<HoverEventAction> implements NamedType {
    static SHOW_ACHIEVEMENT: HoverEventAction;
    static SHOW_ENTITY: HoverEventAction;
    static SHOW_ITEM: HoverEventAction;
    static SHOW_TEXT: HoverEventAction;
    static byName(paramarg0: string): HoverEventAction;
    static byName(paramarg0: string, paramarg1: boolean): HoverEventAction;
    static byName(paramarg0: string, paramarg1: (param0: string, param1: string) => boolean): HoverEventAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): HoverEventAction;
    static values(): HoverEventAction[];
    private constructor(arg2: string, arg3: boolean)
    readonly userDefinable: boolean;
    getName(): string;
    isUserDefinable(): boolean;
    name(): "SHOW_TEXT" | "SHOW_ACHIEVEMENT" | "SHOW_ITEM" | "SHOW_ENTITY";
}