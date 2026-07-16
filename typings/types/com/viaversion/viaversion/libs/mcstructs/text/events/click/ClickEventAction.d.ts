import type { NamedType } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/types/NamedType.d.ts'
import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BiPredicate } from '../../../../../../../../java/util/function/BiPredicate.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ClickEventAction extends Enum<ClickEventAction> implements NamedType {
    static CHANGE_PAGE: ClickEventAction;
    static COPY_TO_CLIPBOARD: ClickEventAction;
    static CUSTOM: ClickEventAction;
    static OPEN_FILE: ClickEventAction;
    static OPEN_URL: ClickEventAction;
    static RUN_COMMAND: ClickEventAction;
    static SHOW_DIALOG: ClickEventAction;
    static SUGGEST_COMMAND: ClickEventAction;
    static TWITCH_USER_INFO: ClickEventAction;
    static byName(paramarg0: string): ClickEventAction;
    static byName(paramarg0: string, paramarg1: boolean): ClickEventAction;
    static byName(paramarg0: string, paramarg1: (param0: string, param1: string) => boolean): ClickEventAction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClickEventAction;
    static values(): ClickEventAction[];
    private constructor(arg2: string, arg3: boolean)
    readonly userDefinable: boolean;
    getName(): string;
    isUserDefinable(): boolean;
    name(): "OPEN_URL" | "OPEN_FILE" | "RUN_COMMAND" | "TWITCH_USER_INFO" | "SUGGEST_COMMAND" | "CHANGE_PAGE" | "COPY_TO_CLIPBOARD" | "SHOW_DIALOG" | "CUSTOM";
}