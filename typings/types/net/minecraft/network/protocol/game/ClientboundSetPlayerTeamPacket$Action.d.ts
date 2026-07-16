import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientboundSetPlayerTeamPacket$Action extends Enum<ClientboundSetPlayerTeamPacket$Action> {
    static ADD: ClientboundSetPlayerTeamPacket$Action;
    static REMOVE: ClientboundSetPlayerTeamPacket$Action;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClientboundSetPlayerTeamPacket$Action;
    static values(): ClientboundSetPlayerTeamPacket$Action[];
    private constructor()
    name(): "ADD" | "REMOVE";
}