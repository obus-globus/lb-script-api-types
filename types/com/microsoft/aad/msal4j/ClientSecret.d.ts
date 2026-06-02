import type { IClientSecret } from '../../../../com/microsoft/aad/msal4j/IClientSecret.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientSecret extends Object implements IClientSecret {
    constructor(arg0: string)
    // private clientSecret: string;
    clientSecret(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}