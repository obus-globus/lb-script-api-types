import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { TrMember$MemberType } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
export class PackageAccessChecker extends Object {
    static checkClass(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: AsmRemapper): void;
    static checkDesc(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: AsmRemapper): void;
    static checkMember(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: TrMember$MemberType, paramarg5: string, paramarg6: AsmRemapper): void;
    static checkValue(paramarg0: string, paramarg1: Object, paramarg2: string, paramarg3: AsmRemapper): void;
    constructor()
}