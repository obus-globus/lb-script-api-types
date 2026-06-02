import type { GlUniformFloat2v } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat2v.d.ts'
import type { GlUniformFloat4v } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat4v.d.ts'
import type { ChunkShaderFogComponent } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderFogComponent.d.ts'
import type { ShaderBindingContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
import type { FogParameters } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export class ChunkShaderFogComponent$Smooth extends ChunkShaderFogComponent {
    constructor(arg0: ShaderBindingContext)
    // private uEnvironmentFog: GlUniformFloat2v;
    // private uFogColor: GlUniformFloat4v;
    // private uRenderFog: GlUniformFloat2v;
    setup(arg0: FogParameters): void;
}