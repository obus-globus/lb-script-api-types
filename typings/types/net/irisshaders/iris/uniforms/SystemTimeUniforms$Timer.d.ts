import type { OptionalLong } from '../../../../java/util/OptionalLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SystemTimeUniforms$Timer extends Object {
    constructor()
    readonly frameTimeCounter: number;
    readonly lastFrameTime: number;
    // private lastStartTime: OptionalLong;
    beginFrame(arg0: number): void;
    getFrameTimeCounter(): number;
    getLastFrameTime(): number;
    reset(): void;
}