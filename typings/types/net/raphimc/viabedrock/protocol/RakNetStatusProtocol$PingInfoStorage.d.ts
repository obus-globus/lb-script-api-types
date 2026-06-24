import type { StorableObject } from '../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RakNetStatusProtocol$PingInfoStorage extends Record implements StorableObject {
    private constructor(pingStartTime: number)
    // private pingStartTime: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    onRemove(): void;
    pingStartTime(): number;
    toString(): string;
}