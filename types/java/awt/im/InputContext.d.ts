import type { AWTEvent } from '../../../java/awt/AWTEvent.d.ts'
import type { Component } from '../../../java/awt/Component.d.ts'
import type { Character$Subset } from '../../../java/lang/Character$Subset.d.ts'
import type { Locale } from '../../../java/util/Locale.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class InputContext extends Object {
    static getInstance(): InputContext;
    constructor()
    dispatchEvent(arg0: AWTEvent): void;
    dispose(): void;
    endComposition(): void;
    getInputMethodControlObject(): Object;
    getLocale(): Locale;
    isCompositionEnabled(): boolean;
    reconvert(): void;
    removeNotify(arg0: Component): void;
    selectInputMethod(arg0: Locale): boolean;
    setCharacterSubsets(arg0: Character$Subset[]): void;
    setCompositionEnabled(arg0: boolean): void;
}