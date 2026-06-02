import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrMember } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
export interface TrField extends Object, TrMember{
    isField(): boolean;
    isMethod(): boolean;
    isPrivate(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isStatic(): boolean;
    isSynthetic(): boolean;
}