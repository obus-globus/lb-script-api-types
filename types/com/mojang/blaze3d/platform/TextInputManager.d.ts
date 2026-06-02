import type { Window } from '../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextInputManager extends Object {
    constructor(window: Window)
    // private cachedIMEStatus: boolean;
    // private imeRequested: boolean;
    // private imeStatusChanged: boolean;
    // private textInputEnabled: boolean;
    // private window: Window;
    // private getIMEStatus(): boolean;
    notifyIMEChanged(): void;
    onTextInputFocusChange(focused: boolean): void;
    // private setIMEInputMode(value: boolean): void;
    setTextInputArea(x0: number, y0: number, x1: number, y1: number): void;
    startTextInput(): void;
    stopTextInput(): void;
    tick(): void;
    // private tickDuringTextInput(): void;
    // private tickOutsideTextInput(): void;
}