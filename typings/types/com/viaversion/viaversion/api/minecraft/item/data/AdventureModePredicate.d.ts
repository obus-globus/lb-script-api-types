import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { BlockPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AdventureModePredicate extends Record implements Copyable, Rewritable {
    static TYPE1_20_5: Type<AdventureModePredicate>;
    constructor(arg0: BlockPredicate[])
    constructor(predicates: BlockPredicate[], showInTooltip: boolean)
    // private predicates: BlockPredicate[];
    // private showInTooltip: boolean;
    copy(): AdventureModePredicate;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    predicates(): BlockPredicate[];
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): AdventureModePredicate;
    showInTooltip(): boolean;
    toString(): string;
}