import type { TextRenderingUtils$Line } from '../../../../com/mojang/realmsclient/util/TextRenderingUtils$Line.d.ts'
import type { TextRenderingUtils$LineSegment } from '../../../../com/mojang/realmsclient/util/TextRenderingUtils$LineSegment.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextRenderingUtils extends Object {
    static decompose(paramtext: string, ...paramlinks: TextRenderingUtils$LineSegment[]): TextRenderingUtils$Line[];
    static split(paramline: string, paramdelimiter: string): string[];
    private constructor()
}