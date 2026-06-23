import type { RenderedImage } from '../../../../java/awt/image/RenderedImage.d.ts'
import type { RenderContext } from '../../../../java/awt/image/renderable/RenderContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RenderableImage extends Object{
    createDefaultRendering(): RenderedImage;
    createRendering(arg0: RenderContext): RenderedImage;
    createScaledRendering(arg0: number, arg1: number, arg2: { [key: string]: any }): RenderedImage;
    getHeight(): number;
    getMinX(): number;
    getMinY(): number;
    getProperty(arg0: string): Object;
    getPropertyNames(): string[];
    getSources(): RenderableImage[];
    getWidth(): number;
    isDynamic(): boolean;
}