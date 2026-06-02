import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { IntFunction } from '../../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { GlObject } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/GlObject.d.ts'
import type { GlProgram$Builder } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlProgram$Builder.d.ts'
import type { GlUniform } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniform.d.ts'
import type { GlUniformBlock } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformBlock.d.ts'
import type { ShaderBindingContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class GlProgram<T extends Object | number | string | boolean> extends GlObject implements ShaderBindingContext {
    static builder(paramarg0: Identifier): GlProgram$Builder;
    constructor(arg0: number, arg1: (param0: ShaderBindingContext) => T)
    // private shaderInterface: T;
    bind(): void;
    bindUniform<U extends GlUniform<Object>>(arg0: string, arg1: (param0: U) => unknown): U;
    bindUniformBlock(arg0: string, arg1: number): GlUniformBlock;
    bindUniformBlockOptional(arg0: string, arg1: number): GlUniformBlock;
    bindUniformOptional<U extends GlUniform<Object>>(arg0: string, arg1: (param0: U) => unknown): U;
    delete(): void;
    getInterface(): T;
    unbind(): void;
}