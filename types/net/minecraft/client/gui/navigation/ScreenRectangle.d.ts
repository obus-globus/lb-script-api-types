import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScreenAxis } from '../../../../../net/minecraft/client/gui/navigation/ScreenAxis.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
import type { ScreenPosition } from '../../../../../net/minecraft/client/gui/navigation/ScreenPosition.d.ts'
import type { Matrix3x2fc } from '../../../../../org/joml/Matrix3x2fc.d.ts'
export class ScreenRectangle extends Record {
    static empty(): ScreenRectangle;
    static of(paramprimaryAxis: ScreenAxis, paramprimaryIndex: number, paramsecondaryIndex: number, paramprimaryLength: number, paramsecondaryLength: number): ScreenRectangle;
    // private height: number;
    // private position: ScreenPosition;
    // private width: number;
    bottom(): number;
    containsPoint(x: number, y: number): boolean;
    encompasses(other: ScreenRectangle): boolean;
    equals(o: Object | null): boolean;
    getBorder(direction: ScreenDirection): ScreenRectangle;
    getBoundInDirection(direction: ScreenDirection): number;
    getCenterInAxis(axis: ScreenAxis): number;
    getLength(axis: ScreenAxis): number;
    hashCode(): number;
    height(): number;
    intersection(other: ScreenRectangle): ScreenRectangle;
    intersects(other: ScreenRectangle): boolean;
    left(): number;
    overlaps(other: ScreenRectangle): boolean;
    overlapsInAxis(other: ScreenRectangle, axis: ScreenAxis): boolean;
    position(): ScreenPosition;
    right(): number;
    step(direction: ScreenDirection): ScreenRectangle;
    toString(): string;
    top(): number;
    transformAxisAligned(matrix: Matrix3x2fc): ScreenRectangle;
    transformMaxBounds(matrix: Matrix3x2fc): ScreenRectangle;
    width(): number;
}