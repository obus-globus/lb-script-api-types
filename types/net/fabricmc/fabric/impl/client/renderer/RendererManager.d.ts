import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Renderer } from '../../../../../../net/fabricmc/fabric/api/client/renderer/v1/Renderer.d.ts'
export class RendererManager extends Object {
    static getRenderer(): Renderer;
    static registerRenderer(paramarg0: Renderer): void;
    private constructor()
}