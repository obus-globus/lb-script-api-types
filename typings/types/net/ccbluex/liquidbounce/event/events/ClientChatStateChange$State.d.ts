import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClientChatStateChange$State extends Enum<ClientChatStateChange$State> {
    static AUTHENTICATION_FAILED: ClientChatStateChange$State;
    static CONNECTED: ClientChatStateChange$State;
    static CONNECTING: ClientChatStateChange$State;
    static DISCONNECTED: ClientChatStateChange$State;
    static LOGGED_IN: ClientChatStateChange$State;
    static LOGGING_IN: ClientChatStateChange$State;
    static getEntries(): ClientChatStateChange$State[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ClientChatStateChange$State;
    static values(): (Object | null)[];
    private constructor()
    name(): "CONNECTING" | "CONNECTED" | "LOGGING_IN" | "LOGGED_IN" | "DISCONNECTED" | "AUTHENTICATION_FAILED";
}