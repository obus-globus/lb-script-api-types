import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { RenderSectionRegion } from '../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
import type { SectionCopy } from '../../../../../net/minecraft/client/renderer/chunk/SectionCopy.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class RenderRegionCache extends Object {
    constructor()
    // private sectionCopyCache: { [key: string]: any };
    createRegion(level: ClientLevel, sectionNode: number): RenderSectionRegion;
    // private getSectionDataCopy(level: Level, sectionX: number, sectionY: number, sectionZ: number): SectionCopy;
}