import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Copyable } from '../../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PotDecorations extends Record implements Copyable, Rewritable {
    static TYPE: Type<PotDecorations>;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(itemIds: number[])
    // private itemIds: number[];
    backItem(): number;
    copy(): PotDecorations;
    equals(arg0: Object | null): boolean;
    frontItem(): number;
    hashCode(): number;
    // private item(arg0: number): number;
    itemIds(): number[];
    leftItem(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): PotDecorations;
    rightItem(): number;
    toString(): string;
}