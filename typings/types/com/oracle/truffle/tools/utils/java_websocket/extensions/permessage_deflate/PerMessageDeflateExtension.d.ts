import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { CompressionExtension } from '../../../../../../../../com/oracle/truffle/tools/utils/java_websocket/extensions/CompressionExtension.d.ts'
import type { IExtension } from '../../../../../../../../com/oracle/truffle/tools/utils/java_websocket/extensions/IExtension.d.ts'
import type { Framedata } from '../../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ByteArrayOutputStream } from '../../../../../../../../java/io/ByteArrayOutputStream.d.ts'
import type { Deflater } from '../../../../../../../../java/util/zip/Deflater.d.ts'
import type { Inflater } from '../../../../../../../../java/util/zip/Inflater.d.ts'
export class PerMessageDeflateExtension extends CompressionExtension {
    constructor()
    readonly clientNoContextTakeover: boolean;
    readonly deflater: Deflater;
    readonly inflater: Inflater;
    // private requestedParameters: JavaMap<string, string>;
    readonly serverNoContextTakeover: boolean;
    readonly threshold: number;
    acceptProvidedExtensionAsClient(arg0: string): boolean;
    acceptProvidedExtensionAsServer(arg0: string): boolean;
    copyInstance(): IExtension;
    decodeFrame(arg0: Framedata): void;
    // private decompress(arg0: number[], arg1: ByteArrayOutputStream): void;
    encodeFrame(arg0: Framedata): void;
    getDeflater(): Deflater;
    getInflater(): Inflater;
    getProvidedExtensionAsClient(): string;
    getProvidedExtensionAsServer(): string;
    getThreshold(): number;
    isClientNoContextTakeover(): boolean;
    isFrameValid(arg0: Framedata): void;
    isServerNoContextTakeover(): boolean;
    setClientNoContextTakeover(arg0: boolean): void;
    setDeflater(arg0: Deflater): void;
    setInflater(arg0: Inflater): void;
    setServerNoContextTakeover(arg0: boolean): void;
    setThreshold(arg0: number): void;
    toString(): string;
}