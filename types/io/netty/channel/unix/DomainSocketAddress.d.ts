import type { File } from '../../../../java/io/File.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DomainSocketAddress extends SocketAddress {
    constructor(arg0: File)
    constructor(arg0: string)
    // private socketPath: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    path(): string;
    toString(): string;
}