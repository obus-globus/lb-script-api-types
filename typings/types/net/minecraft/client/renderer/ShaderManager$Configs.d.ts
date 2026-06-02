import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PostChainConfig } from '../../../../net/minecraft/client/renderer/PostChainConfig.d.ts'
import type { ShaderManager$ShaderSourceKey } from '../../../../net/minecraft/client/renderer/ShaderManager$ShaderSourceKey.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderManager$Configs extends Record {
    static EMPTY: ShaderManager$Configs;
    constructor(shaderSources: Map<ShaderManager$ShaderSourceKey, string>, postChains: Map<Identifier, PostChainConfig>)
    // private postChains: Map<Identifier, PostChainConfig>;
    // private shaderSources: Map<ShaderManager$ShaderSourceKey, string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    postChains(): Map<Identifier, PostChainConfig>;
    shaderSources(): Map<ShaderManager$ShaderSourceKey, string>;
    toString(): string;
}