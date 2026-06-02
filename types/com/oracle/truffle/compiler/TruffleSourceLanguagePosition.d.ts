import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleSourceLanguagePosition extends Object{
    getDescription(): string;
    getLanguage(): string;
    getLineNumber(): number;
    getNodeClassName(): string;
    getNodeId(): number;
    getOffsetEnd(): number;
    getOffsetStart(): number;
    getURI(): URI;
}