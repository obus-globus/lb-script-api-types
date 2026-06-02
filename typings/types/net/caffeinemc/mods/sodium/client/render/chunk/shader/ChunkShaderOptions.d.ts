import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ShaderConstants } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderConstants.d.ts'
import type { ChunkFogMode } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkFogMode.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { ChunkVertexType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
export class ChunkShaderOptions extends Record {
    constructor(fog: ChunkFogMode, pass: TerrainRenderPass, vertexType: ChunkVertexType)
    // private fog: ChunkFogMode;
    // private pass: TerrainRenderPass;
    // private vertexType: ChunkVertexType;
    constants(): ShaderConstants;
    equals(arg0: Object | null): boolean;
    fog(): ChunkFogMode;
    hashCode(): number;
    pass(): TerrainRenderPass;
    toString(): string;
    vertexType(): ChunkVertexType;
}