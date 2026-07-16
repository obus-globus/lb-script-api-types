import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefMenuModel$MenuItemType extends Enum<CefMenuModel$MenuItemType> {
    static MENUITEMTYPE_CHECK: CefMenuModel$MenuItemType;
    static MENUITEMTYPE_COMMAND: CefMenuModel$MenuItemType;
    static MENUITEMTYPE_NONE: CefMenuModel$MenuItemType;
    static MENUITEMTYPE_RADIO: CefMenuModel$MenuItemType;
    static MENUITEMTYPE_SEPARATOR: CefMenuModel$MenuItemType;
    static MENUITEMTYPE_SUBMENU: CefMenuModel$MenuItemType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefMenuModel$MenuItemType;
    static values(): CefMenuModel$MenuItemType[];
    private constructor()
    name(): "MENUITEMTYPE_NONE" | "MENUITEMTYPE_COMMAND" | "MENUITEMTYPE_CHECK" | "MENUITEMTYPE_RADIO" | "MENUITEMTYPE_SEPARATOR" | "MENUITEMTYPE_SUBMENU";
}