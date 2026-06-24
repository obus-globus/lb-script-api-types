import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ElementWidgetScreenData extends Record {
    static EMPTY: ElementWidgetScreenData;
    constructor(heading: Component, backButton: boolean)
    // private backButton: boolean;
    // private heading: Component;
    backButton(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    heading(): Component;
    toString(): string;
}