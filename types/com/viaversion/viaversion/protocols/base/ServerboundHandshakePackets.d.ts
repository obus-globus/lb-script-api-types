import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { BaseServerboundPacket } from '../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundHandshakePackets extends Enum<ServerboundHandshakePackets> implements BaseServerboundPacket {
    static CLIENT_INTENTION: ServerboundHandshakePackets;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundHandshakePackets;
    static values(): (Object | null)[];
    private constructor()
    getId(): number;
    getName(): string;
    state(): State;
    name(): "CLIENT_INTENTION";
}