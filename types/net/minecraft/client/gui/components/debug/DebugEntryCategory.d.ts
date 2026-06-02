import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class DebugEntryCategory extends Record {
    static RENDERER: DebugEntryCategory;
    static SCREEN_TEXT: DebugEntryCategory;
    // private label: Component;
    // private sortKey: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    label(): Component;
    sortKey(): number;
    toString(): string;
}