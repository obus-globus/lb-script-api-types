import type { Transformation } from '../../../../com/mojang/math/Transformation.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Display$GenericInterpolator } from '../../../../net/minecraft/world/entity/Display$GenericInterpolator.d.ts'
export class Display$TransformationInterpolator extends Record implements Display$GenericInterpolator<Transformation> {
    static constant<T extends unknown>(paramvalue: T): (param0: number) => T;
    private constructor(previous: Transformation, current: Transformation)
    // private current: Transformation;
    // private previous: Transformation;
    current(): Transformation;
    equals(o: Object | null): boolean;
    get(progress: number): Transformation;
    hashCode(): number;
    previous(): Transformation;
    toString(): string;
}