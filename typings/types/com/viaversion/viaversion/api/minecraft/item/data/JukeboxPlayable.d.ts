import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EitherHolder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/EitherHolder.d.ts'
import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { JukeboxPlayable$JukeboxSong } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/JukeboxPlayable$JukeboxSong.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Rewritable } from '../../../../../../../com/viaversion/viaversion/util/Rewritable.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JukeboxPlayable extends Record implements Rewritable {
    static TYPE1_21: Type<JukeboxPlayable>;
    static TYPE1_21_5: Type<JukeboxPlayable>;
    constructor(song: EitherHolder<JukeboxPlayable$JukeboxSong>, showInTooltip: boolean)
    constructor(arg0: Holder<JukeboxPlayable$JukeboxSong>, arg1: boolean)
    constructor(arg0: string, arg1: boolean)
    // private showInTooltip: boolean;
    // private song: EitherHolder<JukeboxPlayable$JukeboxSong>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    rewrite(arg0: UserConnection, arg1: Protocol<any, any, any, any>, arg2: boolean): JukeboxPlayable;
    showInTooltip(): boolean;
    song(): EitherHolder<JukeboxPlayable$JukeboxSong>;
    toString(): string;
}