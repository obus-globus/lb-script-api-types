import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ToolRule } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/ToolRule.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ToolProperties extends Record implements Rewritable {
    static TYPE1_20_5: Type<ToolProperties>;
    static TYPE1_21_5: Type<ToolProperties>;
    // private canDestroyBlocksInCreative: boolean;
    // private damagePerBlock: number;
    // private defaultMiningSpeed: number;
    // private rules: ToolRule[];
    canDestroyBlocksInCreative(): boolean;
    damagePerBlock(): number;
    defaultMiningSpeed(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): ToolProperties;
    rules(): ToolRule[];
    toString(): string;
}