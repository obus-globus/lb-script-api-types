import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DirectiveHolder } from '../../../../../net/irisshaders/iris/shaderpack/parsing/DirectiveHolder.d.ts'
import type { PackRenderTargetDirectives$RenderTargetSettings } from '../../../../../net/irisshaders/iris/shaderpack/properties/PackRenderTargetDirectives$RenderTargetSettings.d.ts'
export class PackRenderTargetDirectives extends Object {
    static BASELINE_SUPPORTED_RENDER_TARGETS: number[];
    static LEGACY_RENDER_TARGETS: string[];
    constructor(arg0: number[])
    readonly renderTargetSettings: JavaMap<any, any>;
    // private acceptBufferDirectives(arg0: DirectiveHolder, arg1: PackRenderTargetDirectives$RenderTargetSettings, arg2: string): void;
    acceptDirectives(arg0: DirectiveHolder): void;
    getBuffersToBeCleared(): (Object | null)[];
    getRenderTargetSettings(): JavaMap<number, PackRenderTargetDirectives$RenderTargetSettings>;
}