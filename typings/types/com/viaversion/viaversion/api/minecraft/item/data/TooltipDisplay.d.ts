import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TooltipDisplay extends Record implements Rewritable {
    static TYPE: Type<TooltipDisplay>;
    // private hiddenComponents: (Object | null)[];
    // private hideTooltip: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hiddenComponents(): (Object | null)[];
    hideTooltip(): boolean;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): TooltipDisplay;
    toString(): string;
}