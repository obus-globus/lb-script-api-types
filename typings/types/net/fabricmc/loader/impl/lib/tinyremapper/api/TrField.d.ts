import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrMember } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { TrMember$MemberType } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export interface TrField extends Object, TrMember{
    getAccess(): number;
    getDesc(): string;
    getIndex(): number;
    getName(): string;
    getOwner(): TrClass;
    getType(): TrMember$MemberType;
    isField(): boolean;
    isMethod(): boolean;
    isPrivate(): boolean;
    isProtected(): boolean;
    isPublic(): boolean;
    isStatic(): boolean;
    isSynthetic(): boolean;
}