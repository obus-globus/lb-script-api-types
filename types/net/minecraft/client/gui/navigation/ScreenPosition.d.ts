import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ScreenAxis } from '../../../../../net/minecraft/client/gui/navigation/ScreenAxis.d.ts'
import type { ScreenDirection } from '../../../../../net/minecraft/client/gui/navigation/ScreenDirection.d.ts'
export class ScreenPosition extends Record {
    static of(paramaxis: ScreenAxis, paramprimaryValue: number, paramsecondaryValue: number): ScreenPosition;
    // private x: number;
    // private y: number;
    equals(o: Object | null): boolean;
    getCoordinate(axis: ScreenAxis): number;
    hashCode(): number;
    step(direction: ScreenDirection): ScreenPosition;
    toString(): string;
    x(): number;
    y(): number;
}