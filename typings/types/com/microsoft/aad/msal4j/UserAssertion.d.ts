import type { IUserAssertion } from '../../../../com/microsoft/aad/msal4j/IUserAssertion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserAssertion extends Object implements IUserAssertion {
    constructor(arg0: string)
    readonly assertion: string;
    readonly assertionHash: string;
    getAssertion(): string;
    getAssertionHash(): string;
}