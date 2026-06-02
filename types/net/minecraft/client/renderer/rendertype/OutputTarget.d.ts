import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OutputTarget extends Object {
    static ITEM_ENTITY_TARGET: OutputTarget;
    static MAIN_TARGET: OutputTarget;
    static OUTLINE_TARGET: OutputTarget;
    static WEATHER_TARGET: OutputTarget;
    constructor(name: string, renderTargetSupplier: () => RenderTarget)
    // private name: string;
    // private renderTargetSupplier: () => RenderTarget;
    getRenderTarget(): RenderTarget;
    toString(): string;
}