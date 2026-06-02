import type { IProtocol } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/protocols/IProtocol.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Protocol extends Object implements IProtocol {
    constructor(arg0: string)
    readonly providedProtocol: string;
    acceptProvidedProtocol(arg0: string): boolean;
    copyInstance(): IProtocol;
    equals(arg0: Object | null): boolean;
    getProvidedProtocol(): string;
    hashCode(): number;
    toString(): string;
}