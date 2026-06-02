import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProgramUniforms$Builder } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms$Builder.d.ts'
import type { ValueUpdateNotifier } from '../../../../../net/irisshaders/iris/gl/state/ValueUpdateNotifier.d.ts'
import type { Uniform } from '../../../../../net/irisshaders/iris/gl/uniform/Uniform.d.ts'
export class ProgramUniforms extends Object {
    static builder(paramarg0: string, paramarg1: number): ProgramUniforms$Builder;
    static clearActiveUniforms(): void;
    constructor(arg0: Uniform[], arg1: Uniform[], arg2: Uniform[], arg3: Uniform[], arg4: ValueUpdateNotifier[])
    // private dynamic: Uniform[];
    // private lastFrame: number;
    // private lastTick: number;
    // private notifiersToReset: ValueUpdateNotifier[];
    // private once: Uniform[];
    // private perFrame: Uniform[];
    // private perTick: Uniform[];
    removeListeners(): void;
    update(): void;
    // private updateStage(arg0: Uniform[]): void;
}