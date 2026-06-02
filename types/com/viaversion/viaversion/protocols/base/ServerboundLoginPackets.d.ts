import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { BaseServerboundPacket } from '../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ServerboundLoginPackets extends Enum<ServerboundLoginPackets> implements BaseServerboundPacket {
    static COOKIE_RESPONSE: ServerboundLoginPackets;
    static CUSTOM_QUERY_ANSWER: ServerboundLoginPackets;
    static ENCRYPTION_KEY: ServerboundLoginPackets;
    static HELLO: ServerboundLoginPackets;
    static LOGIN_ACKNOWLEDGED: ServerboundLoginPackets;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ServerboundLoginPackets;
    static values(): (Object | null)[];
    private constructor()
    getId(): number;
    getName(): string;
    state(): State;
    name(): "HELLO" | "ENCRYPTION_KEY" | "CUSTOM_QUERY_ANSWER" | "LOGIN_ACKNOWLEDGED" | "COOKIE_RESPONSE";
}