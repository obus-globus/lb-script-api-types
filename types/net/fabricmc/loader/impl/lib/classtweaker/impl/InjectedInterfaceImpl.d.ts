import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { InjectedInterface } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/InjectedInterface.d.ts'
export class InjectedInterfaceImpl extends Object implements InjectedInterface {
    constructor(arg0: string)
    // private injectedInterface: string;
    getInterfaceName(): string;
    getInterfaceSignature(): string;
    hasGenerics(): boolean;
    hashCode(): number;
}