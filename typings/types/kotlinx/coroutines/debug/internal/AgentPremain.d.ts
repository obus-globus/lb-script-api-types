import type { Instrumentation } from '../../../../java/lang/instrument/Instrumentation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AgentPremain extends Object {
    static INSTANCE: AgentPremain;
    static premain(paramarg0: string, paramarg1: Instrumentation): void;
    // private enableCreationStackTraces: boolean;
    // private installSignalHandler(): void;
    premain(args: string | null, instrumentation: Instrumentation): void;
}