import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RenderingDebug extends Object implements DebuggedOwner {
    static INSTANCE: RenderingDebug;
    static flipFrame(): void;
    static increaseRenderPassCount(): void;
    readonly debugDisplayName: Component;
    readonly renderPassCount: number;
    flipFrame(): void;
    increaseRenderPassCount(): void;
}