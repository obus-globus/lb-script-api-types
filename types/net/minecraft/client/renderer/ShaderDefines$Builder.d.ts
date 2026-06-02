import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { ImmutableSet$Builder } from '../../../../com/google/common/collect/ImmutableSet$Builder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderDefines } from '../../../../net/minecraft/client/renderer/ShaderDefines.d.ts'
export class ShaderDefines$Builder extends Object {
    private constructor()
    // private flags: ImmutableSet$Builder<string>;
    // private values: ImmutableMap$Builder<string, string>;
    build(): ShaderDefines;
    define(key: string): ShaderDefines$Builder;
    define(key: string, value: number): ShaderDefines$Builder;
    define(key: string, value: number): ShaderDefines$Builder;
    define(key: string, value: string): ShaderDefines$Builder;
}