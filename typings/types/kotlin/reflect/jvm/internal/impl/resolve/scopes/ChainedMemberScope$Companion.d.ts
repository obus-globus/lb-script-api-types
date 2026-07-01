import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { MemberScope } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
export class ChainedMemberScope$Companion extends Object {
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: string, arg1: MemberScope[]): MemberScope;
    createOrSingle$org_jetbrains_kotlin_descriptors(arg0: string, arg1: MemberScope[]): MemberScope;
}