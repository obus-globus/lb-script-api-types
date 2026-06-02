import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IProtocol extends Object{
    acceptProvidedProtocol(arg0: string): boolean;
    copyInstance(): IProtocol;
    getProvidedProtocol(): string;
}