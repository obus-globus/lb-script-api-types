import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GeodeLayerSettings extends Object {
    static CODEC: Codec<GeodeLayerSettings>;
    constructor(filling: number, innerLayer: number, middleLayer: number, outerLayer: number)
    filling: number;
    innerLayer: number;
    middleLayer: number;
    outerLayer: number;
}