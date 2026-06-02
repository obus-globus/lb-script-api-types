import type { InspectorServerConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServerConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface InspectorServerConnection$Open extends Object{
    open(port: number, host: string, wait: boolean): InspectorServerConnection;
}