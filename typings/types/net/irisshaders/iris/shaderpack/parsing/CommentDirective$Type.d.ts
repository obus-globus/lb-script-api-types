import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CommentDirective$Type extends Enum<CommentDirective$Type> {
    static DRAWBUFFERS: CommentDirective$Type;
    static RENDERTARGETS: CommentDirective$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CommentDirective$Type;
    static values(): CommentDirective$Type[];
    private constructor()
    name(): "DRAWBUFFERS" | "RENDERTARGETS";
}