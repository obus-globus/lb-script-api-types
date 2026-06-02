import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PopupScreen } from '../../../../../net/minecraft/client/gui/components/PopupScreen.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class PopupScreen$ButtonOption extends Record {
    private constructor(message: Component, action: (param0: PopupScreen) => void)
    // private action: (param0: PopupScreen) => void;
    // private message: Component;
    action(): (param0: PopupScreen) => void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    message(): Component;
    toString(): string;
}