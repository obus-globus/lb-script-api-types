import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export class ModMenuScreenTexts extends Object {
    static CONFIGURE: Component;
    static DROP_CONFIRM: Component;
    static DROP_INFO_LINE_1: Component;
    static DROP_INFO_LINE_2: Component;
    static DROP_SUCCESSFUL_LINE_1: Component;
    static DROP_SUCCESSFUL_LINE_2: Component;
    static ISSUES: Component;
    static MODS_FOLDER: Component;
    static SEARCH: Component;
    static TITLE: Component;
    static TOGGLE_FILTER_OPTIONS: Component;
    static WEBSITE: Component;
    static configureError(paramarg0: string, paramarg1: Throwable): Component;
    static modIdTooltip(paramarg0: string): Component;
    private constructor()
}