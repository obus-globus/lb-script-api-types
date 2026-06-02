import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Material } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/material/Material.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
export class DefaultMaterials extends Object {
    static CUTOUT_MIPPED: Material;
    static SOLID: Material;
    static TRANSLUCENT: Material;
    static forChunkLayer(paramarg0: ChunkSectionLayer): Material;
    constructor()
}