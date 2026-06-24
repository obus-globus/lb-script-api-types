import type { Source } from '../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { InspectorDebugger } from '../../../../../com/oracle/truffle/tools/chromeinspector/InspectorDebugger.d.ts'
import type { ScriptsHandler$LoadScriptListener } from '../../../../../com/oracle/truffle/tools/chromeinspector/ScriptsHandler$LoadScriptListener.d.ts'
import type { Script } from '../../../../../com/oracle/truffle/tools/chromeinspector/types/Script.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class InspectorDebugger$LoadScriptListenerImpl extends Object implements ScriptsHandler$LoadScriptListener {
    private constructor(null_: InspectorDebugger)
    // private getSourceMapURL(source: Source, lastLine: number): CharSequence;
    loadedScript(script: Script): void;
}