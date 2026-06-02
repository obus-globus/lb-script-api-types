import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NetUtils extends Object {
    static getCanonicalLocalHostname(): string;
    static getLocalHostname(): string;
    static getMacAddress(): number[];
    static getMacAddressString(): string;
    static toURI(parampath: string): URI;
    static toURIs(parampath: string): URI[];
    private constructor()
}