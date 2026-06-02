import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Viewport } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export interface ViewportProvider extends Object{
    sodium$createViewport(): Viewport;
}