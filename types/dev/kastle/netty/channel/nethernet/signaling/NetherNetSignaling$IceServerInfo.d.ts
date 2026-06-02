import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NetherNetSignaling$IceServerInfo extends Record {
    constructor(username: string, password: string, urls: string[])
    // private password: string;
    // private urls: string[];
    // private username: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    password(): string;
    toString(): string;
    urls(): string[];
    username(): string;
}