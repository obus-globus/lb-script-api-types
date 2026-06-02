import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ScreenPrompt$Action extends Record {
    constructor(label: Component, runnable: () => void)
    // private label: Component;
    // private runnable: () => void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    label(): Component;
    runnable(): () => void;
    toString(): string;
}