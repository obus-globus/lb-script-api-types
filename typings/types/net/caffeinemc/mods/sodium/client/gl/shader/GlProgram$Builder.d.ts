import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlProgram } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlProgram.d.ts'
import type { GlShader } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlShader.d.ts'
import type { ShaderBindingContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlProgram$Builder extends Object {
    constructor(arg0: Identifier)
    // private name: Identifier;
    // private program: number;
    attachShader(arg0: GlShader): GlProgram$Builder;
    bindAttribute(arg0: string, arg1: number): GlProgram$Builder;
    bindFragmentData(arg0: string, arg1: number): GlProgram$Builder;
    link(arg0: (param0: ShaderBindingContext) => U): GlProgram<U>;
}