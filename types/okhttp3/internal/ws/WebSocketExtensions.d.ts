import type { Object } from '../../../java/lang/Object.d.ts'
import type { WebSocketExtensions$Companion } from '../../../okhttp3/internal/ws/WebSocketExtensions$Companion.d.ts'
export class WebSocketExtensions extends Object {
    static Companion: WebSocketExtensions$Companion;
    constructor(perMessageDeflate: boolean, clientMaxWindowBits: number | null, clientNoContextTakeover: boolean, serverMaxWindowBits: number | null, serverNoContextTakeover: boolean, unknownValues: boolean)
    clientMaxWindowBits: number | null;
    clientNoContextTakeover: boolean;
    perMessageDeflate: boolean;
    serverMaxWindowBits: number | null;
    serverNoContextTakeover: boolean;
    unknownValues: boolean;
    component1(): boolean;
    component2(): number | null;
    component3(): boolean;
    component4(): number | null;
    component5(): boolean;
    component6(): boolean;
    copy(perMessageDeflate: boolean, clientMaxWindowBits: number | null, clientNoContextTakeover: boolean, serverMaxWindowBits: number | null, serverNoContextTakeover: boolean, unknownValues: boolean): WebSocketExtensions;
    equals(other: Object | null): boolean;
    hashCode(): number;
    noContextTakeover(clientOriginated: boolean): boolean;
    toString(): string;
}