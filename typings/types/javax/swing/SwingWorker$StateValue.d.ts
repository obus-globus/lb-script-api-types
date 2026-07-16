import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class SwingWorker$StateValue extends Enum<SwingWorker$StateValue> {
    static DONE: SwingWorker$StateValue;
    static PENDING: SwingWorker$StateValue;
    static STARTED: SwingWorker$StateValue;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SwingWorker$StateValue;
    static values(): SwingWorker$StateValue[];
    private constructor()
    name(): "PENDING" | "STARTED" | "DONE";
}