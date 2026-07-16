import type { Direction } from '../../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { State } from '../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { BaseClientboundPacket } from '../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientboundLoginPackets extends Enum<ClientboundLoginPackets> implements BaseClientboundPacket {
    static COOKIE_REQUEST: ClientboundLoginPackets;
    static CUSTOM_QUERY: ClientboundLoginPackets;
    static GAME_PROFILE: ClientboundLoginPackets;
    static HELLO: ClientboundLoginPackets;
    static LOGIN_COMPRESSION: ClientboundLoginPackets;
    static LOGIN_DISCONNECT: ClientboundLoginPackets;
    static LOGIN_FINISHED: ClientboundLoginPackets;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ClientboundLoginPackets;
    static values(): ClientboundLoginPackets[];
    private constructor()
    direction(): Direction;
    getId(): number;
    getName(): string;
    state(): State;
    name(): "LOGIN_DISCONNECT" | "HELLO" | "LOGIN_FINISHED" | "LOGIN_COMPRESSION" | "CUSTOM_QUERY" | "COOKIE_REQUEST";
}