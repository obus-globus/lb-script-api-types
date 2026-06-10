import type { IntFunction } from '../../../../../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlUniform } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniform.d.ts'
import type { GlUniformBlock } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformBlock.d.ts'
export interface ShaderBindingContext extends Object {
    bindUniform<U extends GlUniform<Object>>(arg0: string, arg1: (param0: number) => U): U;
    bindUniformBlock(arg0: string, arg1: number): GlUniformBlock;
    bindUniformBlockOptional(arg0: string, arg1: number): GlUniformBlock;
    bindUniformOptional<U extends GlUniform<Object>>(arg0: string, arg1: (param0: number) => U): U;
}