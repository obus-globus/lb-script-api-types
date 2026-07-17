import type { JavaMap } from '../../JavaMap.d.ts'
import type { Reference } from '../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Font2D } from '../../sun/font/Font2D.d.ts'
import type { FontStrike } from '../../sun/font/FontStrike.d.ts'
import type { FontStrikeDesc } from '../../sun/font/FontStrikeDesc.d.ts'
import type { Disposer$PollDisposable } from '../../sun/java2d/Disposer$PollDisposable.d.ts'
import type { DisposerRecord } from '../../sun/java2d/DisposerRecord.d.ts'
export class FontStrikeDisposer extends Object implements Disposer$PollDisposable, DisposerRecord {
    constructor(arg0: Font2D, arg1: FontStrikeDesc)
    constructor(arg0: Font2D, arg1: FontStrikeDesc, arg2: number)
    constructor(arg0: Font2D, arg1: FontStrikeDesc, arg2: number, arg3: number[])
    constructor(arg0: Font2D, arg1: FontStrikeDesc, arg2: number, arg3: number[])
    // private comp: boolean;
    // private desc: FontStrikeDesc;
    // private disposed: boolean;
    // private intGlyphImages: number[];
    // private longGlyphImages: number[];
    // private pScalerContext: number;
    // private segIntGlyphImages: number[][];
    // private segLongGlyphImages: number[][];
    // private strikeCache: JavaMap<FontStrikeDesc, Reference<FontStrike>>;
    dispose(): void;
}