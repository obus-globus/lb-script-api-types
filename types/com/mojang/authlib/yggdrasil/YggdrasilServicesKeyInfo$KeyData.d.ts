import type { Record } from '../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrasilServicesKeyInfo$KeyData extends Record {
    private constructor(publicKey: ByteBuffer)
    // private publicKey: ByteBuffer;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    publicKey(): ByteBuffer;
    toString(): string;
}