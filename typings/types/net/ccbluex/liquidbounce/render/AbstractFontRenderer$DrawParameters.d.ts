import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HorizontalAnchor } from '../../../../net/ccbluex/liquidbounce/render/engine/font/HorizontalAnchor.d.ts'
import type { VerticalAnchor } from '../../../../net/ccbluex/liquidbounce/render/engine/font/VerticalAnchor.d.ts'
export class AbstractFontRenderer$DrawParameters extends Object {
    static INSTANCE: AbstractFontRenderer$DrawParameters;
    static horizontalAnchor: HorizontalAnchor;
    static scale: number;
    static shadow: boolean;
    static verticalAnchor: VerticalAnchor;
    static x: number;
    static y: number;
    static z: number;
    static reset2D(): void;
    static reset3D(): void;
    horizontalAnchor: HorizontalAnchor | null;
    scale: number;
    shadow: boolean;
    verticalAnchor: VerticalAnchor | null;
    x: number;
    y: number;
    z: number;
    reset2D(): void;
    reset3D(): void;
}