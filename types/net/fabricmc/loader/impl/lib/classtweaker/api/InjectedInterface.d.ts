import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface InjectedInterface extends Object{
    getInterfaceName(): string;
    getInterfaceSignature(): string;
    hasGenerics(): boolean;
}