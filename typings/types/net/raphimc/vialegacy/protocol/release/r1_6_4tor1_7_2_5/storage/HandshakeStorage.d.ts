import type { StorableObject } from '../../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class HandshakeStorage extends Object implements StorableObject {
    constructor(arg0: string, arg1: number)
    readonly hostname: string;
    readonly port: number;
    getHostname(): string;
    getPort(): number;
    onRemove(): void;
}