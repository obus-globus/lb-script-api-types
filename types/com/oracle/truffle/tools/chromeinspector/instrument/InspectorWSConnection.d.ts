import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface InspectorWSConnection extends Object{
    close(token: Token): void;
    closing(token: Token): void;
    consoleAPICall(token: Token, type: string, text: Object): void;
    dispose(): void;
    getPort(): number;
}