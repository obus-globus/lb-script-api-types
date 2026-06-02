import type { IExtension } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/extensions/IExtension.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DefaultExtension extends Object implements IExtension {
    constructor()
    acceptProvidedExtensionAsClient(arg0: string): boolean;
    acceptProvidedExtensionAsServer(arg0: string): boolean;
    copyInstance(): IExtension;
    decodeFrame(arg0: Framedata): void;
    encodeFrame(arg0: Framedata): void;
    equals(arg0: Object | null): boolean;
    getProvidedExtensionAsClient(): string;
    getProvidedExtensionAsServer(): string;
    hashCode(): number;
    isFrameValid(arg0: Framedata): void;
    reset(): void;
    toString(): string;
}