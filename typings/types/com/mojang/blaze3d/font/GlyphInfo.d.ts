import type { Object } from '../../../../java/lang/Object.d.ts'
export interface GlyphInfo extends Object{
    getAdvance(): number;
    getAdvance(bold: boolean): number;
    getBoldOffset(): number;
    getShadowOffset(): number;
}