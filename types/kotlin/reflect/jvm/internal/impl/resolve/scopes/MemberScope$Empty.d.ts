import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { MemberScope$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope$Companion.d.ts'
import type { MemberScopeImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScopeImpl.d.ts'
export class MemberScope$Empty extends MemberScopeImpl {
    static Companion: MemberScope$Companion;
    static INSTANCE: MemberScope$Empty;
    private constructor()
    getClassifierNames(): Name[];
    getFunctionNames(): Name[];
    getVariableNames(): Name[];
}