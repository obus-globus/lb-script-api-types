import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { FabricResourceReloader } from '../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { PostChain } from '../../../../net/minecraft/client/renderer/PostChain.d.ts'
import type { Projection } from '../../../../net/minecraft/client/renderer/Projection.d.ts'
import type { ProjectionMatrixBuffer } from '../../../../net/minecraft/client/renderer/ProjectionMatrixBuffer.d.ts'
import type { ShaderManager$CompilationCache } from '../../../../net/minecraft/client/renderer/ShaderManager$CompilationCache.d.ts'
import type { ShaderManager$Configs } from '../../../../net/minecraft/client/renderer/ShaderManager$Configs.d.ts'
import type { TextureManager } from '../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { SimplePreparableReloadListener } from '../../../../net/minecraft/server/packs/resources/SimplePreparableReloadListener.d.ts'
import type { ProfilerFiller } from '../../../../net/minecraft/util/profiling/ProfilerFiller.d.ts'
export class ShaderManager extends SimplePreparableReloadListener<ShaderManager$Configs> implements AutoCloseable, FabricResourceReloader {
    static MAX_LOG_LENGTH: number;
    static SHADER_PATH: string;
    constructor(textureManager: TextureManager, recoveryHandler: (param0: Exception) => void)
    // private compilationCache: ShaderManager$CompilationCache;
    // private fabric$id: Identifier;
    // private postChainProjection: Projection;
    // private postChainProjectionMatrixBuffer: ProjectionMatrixBuffer;
    // private recoveryHandler: (param0: Exception) => void;
    // private textureManager: TextureManager;
    apply(preparations: ShaderManager$Configs, manager: ResourceManager, profiler: ProfilerFiller): void;
    close(): void;
    fabric$getId(): Identifier;
    getName(): string;
    getPostChain(id: Identifier, allowedTargets: Identifier[]): PostChain;
    getShader(id: Identifier, type: ShaderType): string;
    // private immediatelyFast$reloadFontStorages(): void;
    prepare(manager: ResourceManager, profiler: ProfilerFiller): ShaderManager$Configs;
    // private tryTriggerRecovery(exception: Exception): void;
}