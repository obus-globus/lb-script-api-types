import type { Dimension } from '../../java/awt/Dimension.d.ts'
import type { Graphics } from '../../java/awt/Graphics.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class PrintJob extends Object {
    constructor()
    end(): void;
    finalize(): void;
    getGraphics(): Graphics;
    getPageDimension(): Dimension;
    getPageResolution(): number;
    lastPageFirst(): boolean;
}