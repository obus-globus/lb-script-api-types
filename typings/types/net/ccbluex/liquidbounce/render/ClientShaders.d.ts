import type { ShaderSource } from '../../../../com/mojang/blaze3d/shaders/ShaderSource.d.ts'
import type { ShaderType } from '../../../../com/mojang/blaze3d/shaders/ShaderType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientShaders$Companion } from '../../../../net/ccbluex/liquidbounce/render/ClientShaders$Companion.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class ClientShaders extends Object implements ShaderSource {
    static Companion: ClientShaders$Companion;
    protected constructor(type: ShaderType)
    // private shaders: Map<Identifier, string>;
    readonly type: ShaderType;
    get(identifier: Identifier, type: ShaderType): string | null;
    // private newShader(id: string, path: string): Identifier;
}