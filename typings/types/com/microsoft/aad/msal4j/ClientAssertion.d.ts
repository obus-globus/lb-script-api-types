import type { IClientAssertion } from '../../../../com/microsoft/aad/msal4j/IClientAssertion.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientAssertion extends Object implements IClientAssertion {
    constructor(arg0: () => string)
    constructor(arg0: string)
    // private assertion: string;
    // private assertionProvider: () => string;
    assertion(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}