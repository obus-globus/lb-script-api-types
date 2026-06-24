import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HandshakeStorage extends Record implements StorableObject {
    constructor(protocolVersion: number, hostname: string, port: number)
    // private hostname: string;
    // private port: number;
    // private protocolVersion: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hostname(): string;
    onRemove(): void;
    port(): number;
    protocolVersion(): number;
    toString(): string;
}