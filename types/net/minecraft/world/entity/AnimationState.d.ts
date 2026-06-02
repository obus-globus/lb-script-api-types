import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AnimationState extends Object {
    constructor()
    // private startTick: number;
    animateWhen(condition: boolean, tickCount: number): void;
    copyFrom(state: AnimationState): void;
    fastForward(ticks: number, timeScale: number): void;
    getTimeInMillis(ageInTicks: number): number;
    ifStarted(timer: (param0: AnimationState) => void): void;
    isStarted(): boolean;
    start(tickCount: number): void;
    startIfStopped(tickCount: number): void;
    stop(): void;
}