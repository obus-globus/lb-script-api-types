import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KineticWeapon } from '../../../../../net/minecraft/world/item/component/KineticWeapon.d.ts'
export class SpearAnimations$UseParams extends Record {
    static fromKineticWeapon(paramkineticWeapon: KineticWeapon, paramtime: number): SpearAnimations$UseParams;
    // private lowerProgress: number;
    // private raiseBackProgress: number;
    // private raiseProgress: number;
    // private raiseProgressEnd: number;
    // private raiseProgressMiddle: number;
    // private raiseProgressStart: number;
    // private swayIntensity: number;
    // private swayProgress: number;
    // private swayScaleFast: number;
    // private swayScaleSlow: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lowerProgress(): number;
    raiseBackProgress(): number;
    raiseProgress(): number;
    raiseProgressEnd(): number;
    raiseProgressMiddle(): number;
    raiseProgressStart(): number;
    swayIntensity(): number;
    swayProgress(): number;
    swayScaleFast(): number;
    swayScaleSlow(): number;
    toString(): string;
}