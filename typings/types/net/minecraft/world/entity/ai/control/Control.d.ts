import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Control extends Object{
    rotateTowards(fromAngle: number, toAngle: number, maxRot: number): number;
}