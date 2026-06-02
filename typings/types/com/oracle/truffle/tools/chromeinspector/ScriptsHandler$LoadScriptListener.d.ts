import type { Script } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Script.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ScriptsHandler$LoadScriptListener extends Object{
    loadedScript(script: Script): void;
}