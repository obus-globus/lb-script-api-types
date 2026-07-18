import type { ConnectionOptions$Companion } from '../../../../io/ktor/http/cio/ConnectionOptions$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConnectionOptions extends Object {
    static Companion: ConnectionOptions$Companion;
    constructor(close: boolean, keepAlive: boolean, upgrade: boolean, extraOptions: string[])
    readonly close: boolean;
    readonly extraOptions: string[];
    readonly keepAlive: boolean;
    readonly upgrade: boolean;
    // private buildToString(): string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}