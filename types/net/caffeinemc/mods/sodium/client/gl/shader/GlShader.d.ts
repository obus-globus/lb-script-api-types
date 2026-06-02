import type { GlObject } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/GlObject.d.ts'
import type { ShaderParser$ParsedShader } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderParser$ParsedShader.d.ts'
import type { ShaderType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/ShaderType.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlShader extends GlObject {
    constructor(arg0: ShaderType, arg1: Identifier, arg2: ShaderParser$ParsedShader)
    readonly name: Identifier;
    delete(): void;
    getName(): Identifier;
}