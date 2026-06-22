import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrLocal } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLocal.d.ts'
import type { TrMember } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { TrMember$MemberType } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export interface TrMethod extends Object, TrMember{
    getAccess(): number;
    getDesc(): string;
    getIndex(): number;
    getLocals(): TrLocal[];
    getName(): string;
    getOwner(): TrClass;
    getType(): TrMember$MemberType;
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