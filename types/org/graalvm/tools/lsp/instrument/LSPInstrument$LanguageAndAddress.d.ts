import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LSPInstrument$HostAndPort } from '../../../../../org/graalvm/tools/lsp/instrument/LSPInstrument$HostAndPort.d.ts'
export class LSPInstrument$LanguageAndAddress extends Object {
    private constructor(languageId: string, address: LSPInstrument$HostAndPort)
    // private address: LSPInstrument$HostAndPort;
    // private languageId: string;
    getAddress(): LSPInstrument$HostAndPort;
    getLanguageId(): string;
    verify(): void;
}