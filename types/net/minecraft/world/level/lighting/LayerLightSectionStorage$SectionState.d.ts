import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LayerLightSectionStorage$SectionType } from '../../../../../net/minecraft/world/level/lighting/LayerLightSectionStorage$SectionType.d.ts'
export class LayerLightSectionStorage$SectionState extends Object {
    static EMPTY: number;
    static hasData(paramstate: number): boolean;
    static hasData(paramstate: number, paramhasData: boolean): number;
    static neighborCount(paramstate: number, paramneighborCount: number): number;
    static neighborCount(paramstate: number): number;
    static type(paramstate: number): LayerLightSectionStorage$SectionType;
    constructor()
}