import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IExtension extends Object{
    acceptProvidedExtensionAsClient(arg0: string): boolean;
    acceptProvidedExtensionAsServer(arg0: string): boolean;
    copyInstance(): IExtension;
    decodeFrame(arg0: Framedata): void;
    encodeFrame(arg0: Framedata): void;
    getProvidedExtensionAsClient(): string;
    getProvidedExtensionAsServer(): string;
    isFrameValid(arg0: Framedata): void;
    reset(): void;
}