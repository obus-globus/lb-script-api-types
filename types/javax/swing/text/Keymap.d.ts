import type { Action } from '../../../javax/swing/Action.d.ts'
import type { KeyStroke } from '../../../javax/swing/KeyStroke.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Keymap extends Object{
    addActionForKeyStroke(arg0: KeyStroke, arg1: Action): void;
    getAction(arg0: KeyStroke): Action;
    getBoundActions(): Action[];
    getBoundKeyStrokes(): KeyStroke[];
    getDefaultAction(): Action;
    getKeyStrokesForAction(arg0: Action): KeyStroke[];
    getName(): string;
    getResolveParent(): Keymap;
    isLocallyDefined(arg0: KeyStroke): boolean;
    removeBindings(): void;
    removeKeyStrokeBinding(arg0: KeyStroke): void;
    setDefaultAction(arg0: Action): void;
    setResolveParent(arg0: Keymap): void;
}