import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SpearUseGoal$SpearUseState extends Object {
    constructor()
    // private awayPos: Vec3;
    // private done: boolean;
    // private engageTime: number;
    // private fleeingTime: number;
    notEngagedYet(): boolean;
    startEngagement(spearDownTime: number): void;
    tickAndCheckEngagement(): boolean;
    tickAndCheckFleeing(): boolean;
}