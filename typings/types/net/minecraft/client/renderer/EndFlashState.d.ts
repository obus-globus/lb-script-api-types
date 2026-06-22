import type { Object } from '../../../../java/lang/Object.d.ts'
import type { EndFlashAccess } from '../../../../net/irisshaders/iris/mixin/EndFlashAccess.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { CallbackInfo } from '../../../../org/spongepowered/asm/mixin/injection/callback/CallbackInfo.d.ts'
export class EndFlashState extends Object implements EndFlashAccess {
    static SOUND_DELAY_IN_TICKS: number;
    constructor()
    // private duration: number;
    // private flashSeed: number;
    // private intensity: number;
    // private offset: number;
    // private oldIntensity: number;
    // private xAngle: number;
    // private yAngle: number;
    // private calculateFlashParameters(clockTime: number): void;
    // private calculateIntensity(clockTime: number): number;
    flashStartedThisTick(): boolean;
    getIntensity(partialTicks: number): number;
    getXAngle(): number;
    getYAngle(): number;
    // private iris$calculateNewAngles(arg0: number, arg1: CallbackInfo, arg2: number, arg3: RandomSource): void;
    setXAngle(arg0: number): void;
    setYAngle(arg0: number): void;
    tick(clockTime: number): void;
}