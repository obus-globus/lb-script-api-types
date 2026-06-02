import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderingWrapper } from '../../../../net/irisshaders/iris/layer/RenderingWrapper.d.ts'
export class EntityRenderStateShard extends Object implements RenderingWrapper {
    static INSTANCE: EntityRenderStateShard;
    private constructor()
    clear(): void;
    setup(): void;
}