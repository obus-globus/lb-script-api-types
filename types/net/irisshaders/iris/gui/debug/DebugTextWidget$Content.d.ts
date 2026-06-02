import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GridLayout } from '../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class DebugTextWidget$Content extends Record {
    constructor(container: GridLayout, narration: Component)
    // private container: GridLayout;
    // private narration: Component;
    container(): GridLayout;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    narration(): Component;
    toString(): string;
}