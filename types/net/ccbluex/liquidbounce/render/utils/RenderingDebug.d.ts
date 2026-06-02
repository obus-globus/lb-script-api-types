import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DebuggedOwner } from '../../../../../net/ccbluex/liquidbounce/features/misc/DebuggedOwner.d.ts'
export class RenderingDebug extends Object implements DebuggedOwner {
    static INSTANCE: RenderingDebug;
    static flipFrame(): void;
    static increaseRenderPassCount(): void;
    readonly renderPassCount: number;
    flipFrame(): void;
    increaseRenderPassCount(): void;
}