import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlShader } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlShader.d.ts'
import type { ShaderConstants } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderConstants.d.ts'
import type { ShaderType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ShaderLoader extends Object {
    static getShaderSource(paramarg0: Identifier): string;
    static loadShader(paramarg0: ShaderType, paramarg1: Identifier, paramarg2: ShaderConstants): GlShader;
    constructor()
}