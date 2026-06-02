import type { OutputHandler$Listener } from '../../../../../com/oracle/truffle/tools/chromeinspector/OutputHandler$Listener.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InspectorRuntime$ConsoleOutputListener extends Object implements OutputHandler$Listener {
    constructor(null_: InspectorRuntime$ConsoleOutputListener, type: string)
    // private output: StringBuilder;
    // private type: string;
    flush(): void;
    outputText(str: string): void;
}