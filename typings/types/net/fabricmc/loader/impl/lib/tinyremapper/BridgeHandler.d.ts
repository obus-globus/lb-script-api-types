import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { ClassInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/ClassInstance.d.ts'
import type { MemberInstance } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/MemberInstance.d.ts'
import type { ClassVisitor } from '../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
export class BridgeHandler extends Object {
    static generateCompatBridges(paramarg0: ClassInstance, paramarg1: AsmRemapper, paramarg2: ClassVisitor): void;
    static getTarget(paramarg0: MemberInstance): MemberInstance;
    constructor()
}