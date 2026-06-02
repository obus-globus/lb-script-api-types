import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommentDirective } from '../../../../../net/irisshaders/iris/shaderpack/parsing/CommentDirective.d.ts'
import type { CommentDirective$Type } from '../../../../../net/irisshaders/iris/shaderpack/parsing/CommentDirective$Type.d.ts'
export class CommentDirectiveParser extends Object {
    static findDirective(paramarg0: string, paramarg1: CommentDirective$Type): Optional<CommentDirective>;
    private constructor()
}