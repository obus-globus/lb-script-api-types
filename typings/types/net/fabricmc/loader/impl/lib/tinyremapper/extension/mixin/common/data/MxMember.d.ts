import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { TrMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember.d.ts'
import type { ResolveUtility } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/ResolveUtility.d.ts'
export class MxMember extends Object {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly desc: string;
    readonly name: string;
    // private owner: string;
    asTrMember(arg0: ResolveUtility): TrMember;
    getDesc(): string;
    getName(): string;
}