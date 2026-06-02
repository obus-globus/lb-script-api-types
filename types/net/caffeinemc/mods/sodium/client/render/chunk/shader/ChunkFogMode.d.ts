import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { ChunkShaderFogComponent } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderFogComponent.d.ts'
import type { ShaderBindingContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
export class ChunkFogMode extends Enum<ChunkFogMode> {
    static NONE: ChunkFogMode;
    static SMOOTH: ChunkFogMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ChunkFogMode;
    static values(): (Object | null)[];
    private constructor(arg2: (param0: ShaderBindingContext) => ChunkShaderFogComponent, arg3: string[])
    readonly defines: string[];
    readonly factory: (param0: ShaderBindingContext) => ChunkShaderFogComponent;
    getDefines(): string[];
    getFactory(): (param0: ShaderBindingContext) => ChunkShaderFogComponent;
    name(): "NONE" | "SMOOTH";
}