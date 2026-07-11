import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class CommonComponents extends Object {
    static CONNECT_FAILED: Component;
    static ELLIPSIS: Component;
    static EMPTY: Component;
    static GUI_ACKNOWLEDGE: Component;
    static GUI_BACK: Component;
    static GUI_CANCEL: Component;
    static GUI_CONTINUE: Component;
    static GUI_COPY_LINK_TO_CLIPBOARD: Component;
    static GUI_COPY_TO_CLIPBOARD: Component;
    static GUI_DISCONNECT: Component;
    static GUI_DONE: Component;
    static GUI_NO: Component;
    static GUI_OK: Component;
    static GUI_OPEN_IN_BROWSER: Component;
    static GUI_PROCEED: Component;
    static GUI_REMOVE: Component;
    static GUI_RETURN_TO_MENU: Component;
    static GUI_TO_TITLE: Component;
    static GUI_YES: Component;
    static NARRATION_SEPARATOR: Component;
    static NEW_LINE: Component;
    static OPTION_OFF: Component;
    static OPTION_ON: Component;
    static SPACE: Component;
    static TRANSFER_CONNECT_FAILED: Component;
    static days(paramvalue: number): MutableComponent;
    static disconnectButtonLabel(paramisLocalServer: boolean): Component;
    static hours(paramvalue: number): MutableComponent;
    static joinForNarration(...paramcomponents: (Object | null)[]): MutableComponent;
    static joinLines(paramlines: Component[]): Component;
    static joinLines(...paramlines: (Object | null)[]): Component;
    static minutes(paramvalue: number): MutableComponent;
    static optionNameValue(paramname: Component, paramvalue: Component): MutableComponent;
    static optionStatus(paramvalue: boolean): Component;
    static optionStatus(paramname: Component, paramvalue: boolean): MutableComponent;
    static space(): MutableComponent;
    constructor()
}