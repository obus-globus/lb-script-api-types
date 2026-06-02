import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrLocal } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLocal.d.ts'
import type { TrMember } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
export interface TrMethod extends Object, TrMember{
    getLocals(): TrLocal[];
    isAbstract(): boolean;
    isBridge(): boolean;
    isField(): boolean;
    isMethod(): boolean;
    isPrivate(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isStatic(): boolean;
    isSynthetic(): boolean;
    isVirtual(): boolean;
}