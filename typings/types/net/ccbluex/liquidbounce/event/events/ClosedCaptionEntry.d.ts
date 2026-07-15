import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClosedCaptionDirection } from '../../../../../net/ccbluex/liquidbounce/event/events/ClosedCaptionDirection.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ClosedCaptionEntry extends Object {
    constructor(text: Component, direction: ClosedCaptionDirection, textColor: number, backgroundColor: number)
    readonly backgroundColor: number;
    readonly direction: ClosedCaptionDirection;
    readonly text: Component;
    readonly textColor: number;
    component1(): Component;
    component2(): ClosedCaptionDirection;
    component3(): number;
    component4(): number;
    copy(text: Component, direction: ClosedCaptionDirection, textColor: number, backgroundColor: number): ClosedCaptionEntry;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}