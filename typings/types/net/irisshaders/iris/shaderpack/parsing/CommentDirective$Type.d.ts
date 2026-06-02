import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CommentDirective$Type extends Enum<CommentDirective$Type> {
    static DRAWBUFFERS: CommentDirective$Type;
    static RENDERTARGETS: CommentDirective$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CommentDirective$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "DRAWBUFFERS" | "RENDERTARGETS";
}