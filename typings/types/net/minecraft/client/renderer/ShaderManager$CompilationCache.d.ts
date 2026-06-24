import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChain } from '../../../../net/minecraft/client/renderer/PostChain.d.ts'
import type { ShaderManager } from '../../../../net/minecraft/client/renderer/ShaderManager.d.ts'
import type { ShaderManager$Configs } from '../../../../net/minecraft/client/renderer/ShaderManager$Configs.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderManager$CompilationCache extends Object implements AutoCloseable {
    private constructor(null_: ShaderManager, configs: ShaderManager$Configs)
    // private configs: ShaderManager$Configs;
    // private postChains: Map<Identifier, Optional<PostChain>>;
    // private triggeredRecovery: boolean;
    close(): void;
    getOrLoadPostChain(id: Identifier, allowedTargets: Identifier[]): PostChain;
    getShaderSource(id: Identifier, type: ShaderType): string;
    // private loadPostChain(id: Identifier, allowedTargets: Identifier[]): PostChain;
}