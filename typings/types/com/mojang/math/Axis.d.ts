import type { Object } from '../../../java/lang/Object.d.ts'
import type { Quaternionf } from '../../../org/joml/Quaternionf.d.ts'
export interface Axis extends Object{
    rotation(angle: number): Quaternionf;
    rotationDegrees(angle: number): Quaternionf;
}