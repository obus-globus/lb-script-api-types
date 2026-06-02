import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommentDirective$Type } from '../../../../../net/irisshaders/iris/shaderpack/parsing/CommentDirective$Type.d.ts'
export class CommentDirective extends Object {
    constructor(arg0: CommentDirective$Type, arg1: string, arg2: number)
    readonly directive: string;
    readonly location: number;
    readonly type: CommentDirective$Type;
    getDirective(): string;
    getLocation(): number;
    getType(): CommentDirective$Type;
}