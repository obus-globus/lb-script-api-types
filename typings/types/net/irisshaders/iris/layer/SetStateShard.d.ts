import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderingWrapper } from '../../../../net/irisshaders/iris/layer/RenderingWrapper.d.ts'
import type { WorldRenderingPhase } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPhase.d.ts'
export class SetStateShard extends Object implements RenderingWrapper {
    static MOON: RenderingWrapper;
    static SUN: RenderingWrapper;
    static SUNSET: RenderingWrapper;
    constructor(arg0: string, arg1: WorldRenderingPhase)
    // private name: WorldRenderingPhase;
    clear(): void;
    setup(): void;
}