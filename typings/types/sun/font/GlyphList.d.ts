import type { GlyphVector } from '../../java/awt/font/GlyphVector.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { ColorGlyphSurfaceData } from '../../sun/font/ColorGlyphSurfaceData.d.ts'
import type { SurfaceData } from '../../sun/java2d/SurfaceData.d.ts'
import type { FontInfo } from '../../sun/java2d/loops/FontInfo.d.ts'
export class GlyphList extends Object {
    static canContainColorGlyphs(): boolean;
    static getInstance(): GlyphList;
    private constructor()
    // private chData: string[];
    // private glyphData: number[];
    // private glyphSurfaceData: ColorGlyphSurfaceData;
    // private glyphindex: number;
    // private gposx: number;
    // private gposy: number;
    // private graybits: number[];
    images: number[];
    // private lcdRGBOrder: boolean;
    // private lcdSubPixPos: boolean;
    // private len: number;
    // private maxLen: number;
    // private maxPosLen: number;
    metrics: number[];
    positions: number[];
    // private strikelist: Object;
    // private usePositions: boolean;
    x: number;
    y: number;
    dispose(): void;
    ensureCapacity(arg0: number): void;
    // private fillBounds(arg0: number[], arg1: number): void;
    getBounds(arg0: number): number[];
    getColorGlyphData(): SurfaceData;
    getGrayBits(): number[];
    getImages(): number[];
    getMetrics(): number[];
    getNumGlyphs(): number;
    getPositions(): number[];
    getStrike(): Object;
    getX(): number;
    getY(): number;
    isColorGlyph(arg0: number): boolean;
    isRGBOrder(): boolean;
    isSubPixPos(): boolean;
    // private mapChars(arg0: FontInfo, arg1: number): boolean;
    setFromChars(arg0: FontInfo, arg1: string[], arg2: number, arg3: number, arg4: number, arg5: number): boolean;
    setFromGlyphVector(arg0: FontInfo, arg1: GlyphVector, arg2: number, arg3: number): void;
    setFromString(arg0: FontInfo, arg1: string, arg2: number, arg3: number): boolean;
    setGlyphIndex(arg0: number): void;
    startGlyphIteration(): void;
    usePositions(): boolean;
}