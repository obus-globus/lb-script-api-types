import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientboundSetPlayerTeamPacket$Action extends Enum<ClientboundSetPlayerTeamPacket$Action> {
    static ADD: ClientboundSetPlayerTeamPacket$Action;
    static REMOVE: ClientboundSetPlayerTeamPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientboundSetPlayerTeamPacket$Action;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADD" | "REMOVE";
}