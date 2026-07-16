import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
/**
 * Client-chat connection states: CONNECTING, CONNECTED, LOGGING_IN, LOGGED_IN, DISCONNECTED, AUTHENTICATION_FAILED.
 */
export class ClientChatStateChange$State extends Enum<ClientChatStateChange$State> {
    static AUTHENTICATION_FAILED: ClientChatStateChange$State;
    static CONNECTED: ClientChatStateChange$State;
    static CONNECTING: ClientChatStateChange$State;
    static DISCONNECTED: ClientChatStateChange$State;
    static LOGGED_IN: ClientChatStateChange$State;
    static LOGGING_IN: ClientChatStateChange$State;
    static getEntries(): ClientChatStateChange$State[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ClientChatStateChange$State;
    static values(): ClientChatStateChange$State[];
    private constructor()
    name(): "CONNECTING" | "CONNECTED" | "LOGGING_IN" | "LOGGED_IN" | "DISCONNECTED" | "AUTHENTICATION_FAILED";
}