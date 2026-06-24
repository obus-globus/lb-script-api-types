import type { DrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/DrawContext.d.ts'
import type { VKDrawContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/device/context/VKDrawContext.d.ts'
export class VKMultiDrawContext extends VKDrawContext {
    static PUSH_CONSTANT_RANGE: number;
    static create(): DrawContext;
    constructor()
    delete(): void;
    endDraw(): void;
    rotate(): void;
}