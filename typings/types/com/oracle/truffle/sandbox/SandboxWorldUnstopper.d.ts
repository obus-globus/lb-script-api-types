import type { SandboxLowMemoryListener } from '../../../../com/oracle/truffle/sandbox/SandboxLowMemoryListener.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxWorldUnstopper extends Object implements Runnable {
    constructor(lowMemoryListener: SandboxLowMemoryListener, parentInvocationNo: number)
    // private lowMemoryListener: SandboxLowMemoryListener;
    // private parentInvocationNo: number;
    run(): void;
    // private unstopTheWorld(): void;
}