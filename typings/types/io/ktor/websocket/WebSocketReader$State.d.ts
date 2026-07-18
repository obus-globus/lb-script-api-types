import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class WebSocketReader$State extends Enum<WebSocketReader$State> {
    static BODY: WebSocketReader$State;
    static CLOSED: WebSocketReader$State;
    static HEADER: WebSocketReader$State;
    static getEntries(): WebSocketReader$State[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): WebSocketReader$State;
    static values(): WebSocketReader$State[];
    private constructor()
    name(): "HEADER" | "BODY" | "CLOSED";
}