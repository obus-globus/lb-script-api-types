import type { Record } from '../../../java/lang/Record.d.ts'
import type { OptionalDouble } from '../../../java/util/OptionalDouble.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class TextGizmo$Style extends Record {
    static DEFAULT_SCALE: number;
    static forColor(paramargb: number): TextGizmo$Style;
    static forColorAndCentered(paramargb: number): TextGizmo$Style;
    static whiteAndCentered(): TextGizmo$Style;
    // private adjustLeft: OptionalDouble;
    // private color: number;
    // private scale: number;
    adjustLeft(): OptionalDouble;
    color(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    scale(): number;
    toString(): string;
    withLeftAlignment(adjustLeft: number): TextGizmo$Style;
    withScale(scale: number): TextGizmo$Style;
}