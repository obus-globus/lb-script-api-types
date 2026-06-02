import type { WSTrustVersion } from '../../../../com/microsoft/aad/msal4j/WSTrustVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BindingPolicy extends Object {
    constructor(arg0: string)
    constructor(arg0: string, arg1: WSTrustVersion)
    readonly url: string;
    readonly value: string;
    readonly version: WSTrustVersion;
    getUrl(): string;
    getValue(): string;
    getVersion(): WSTrustVersion;
    setUrl(arg0: string): void;
    setValue(arg0: string): void;
    setVersion(arg0: WSTrustVersion): void;
}