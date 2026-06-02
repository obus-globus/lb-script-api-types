import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { SystemTimeUniforms$FrameCounter } from '../../../../net/irisshaders/iris/uniforms/SystemTimeUniforms$FrameCounter.d.ts'
import type { SystemTimeUniforms$Timer } from '../../../../net/irisshaders/iris/uniforms/SystemTimeUniforms$Timer.d.ts'
export class SystemTimeUniforms extends Object {
    static COUNTER: SystemTimeUniforms$FrameCounter;
    static TIMER: SystemTimeUniforms$Timer;
    static addSystemTimeUniforms(paramarg0: UniformHolder): void;
    private constructor()
}