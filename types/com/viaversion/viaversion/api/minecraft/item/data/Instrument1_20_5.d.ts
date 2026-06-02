import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Int2IntFunction } from '../../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Instrument1_20_5 extends Record implements Rewritable {
    static TYPE: HolderType<Instrument1_20_5>;
    // private range: number;
    // private soundEvent: Holder<SoundEvent>;
    // private useDuration: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    range(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<Object, Object, Object, Object>, arg2: boolean): Instrument1_20_5;
    soundEvent(): Holder<SoundEvent>;
    toString(): string;
    useDuration(): number;
}