import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Dim2i } from '../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export interface Dimensioned extends Object{
    getCenterX(): number;
    getCenterY(): number;
    getDimensions(): Dim2i;
    getHeight(): number;
    getLimitX(): number;
    getLimitY(): number;
    getWidth(): number;
    getX(): number;
    getY(): number;
}