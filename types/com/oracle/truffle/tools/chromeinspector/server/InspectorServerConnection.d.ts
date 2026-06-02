import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface InspectorServerConnection extends Object{
    close(): void;
    consoleAPICall(type: string, text: Object): void;
    getExecutionContext(): InspectorExecutionContext;
    getURL(): string;
}