import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RenderSectionRegion } from '../../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
export class SectionUpdateRenderState extends Record {
    constructor(sectionNode: number, playerChanged: boolean, region: RenderSectionRegion)
    // private playerChanged: boolean;
    // private region: RenderSectionRegion;
    // private sectionNode: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    playerChanged(): boolean;
    region(): RenderSectionRegion;
    sectionNode(): number;
    toString(): string;
}