import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Matrix3x2fc } from '../../../../org/joml/Matrix3x2fc.d.ts'
export class ActiveTextCollector$Parameters extends Record {
    constructor(pose: Matrix3x2fc)
    constructor(pose: Matrix3x2fc, opacity: number, scissor: ScreenRectangle)
    // private opacity: number;
    // private pose: Matrix3x2fc;
    // private scissor: ScreenRectangle;
    equals(o: Object | null): boolean;
    hashCode(): number;
    opacity(): number;
    pose(): Matrix3x2fc;
    scissor(): ScreenRectangle;
    toString(): string;
    withOpacity(opacity: number): ActiveTextCollector$Parameters;
    withPose(pose: Matrix3x2fc): ActiveTextCollector$Parameters;
    withScale(scale: number): ActiveTextCollector$Parameters;
    withScissor(left: number, right: number, top: number, bottom: number): ActiveTextCollector$Parameters;
    withScissor(scissor: ScreenRectangle): ActiveTextCollector$Parameters;
}