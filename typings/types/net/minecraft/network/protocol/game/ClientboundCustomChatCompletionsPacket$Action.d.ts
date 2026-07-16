import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientboundCustomChatCompletionsPacket$Action extends Enum<ClientboundCustomChatCompletionsPacket$Action> {
    static ADD: ClientboundCustomChatCompletionsPacket$Action;
    static REMOVE: ClientboundCustomChatCompletionsPacket$Action;
    static SET: ClientboundCustomChatCompletionsPacket$Action;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClientboundCustomChatCompletionsPacket$Action;
    static values(): ClientboundCustomChatCompletionsPacket$Action[];
    private constructor()
    name(): "ADD" | "REMOVE" | "SET";
}