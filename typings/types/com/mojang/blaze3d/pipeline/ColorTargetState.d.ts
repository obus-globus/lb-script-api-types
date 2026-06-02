import type { BlendFunction } from '../../../../com/mojang/blaze3d/pipeline/BlendFunction.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ColorTargetState extends Record {
    static DEFAULT: ColorTargetState;
    static WRITE_ALL: number;
    static WRITE_ALPHA: number;
    static WRITE_BLUE: number;
    static WRITE_COLOR: number;
    static WRITE_GREEN: number;
    static WRITE_NONE: number;
    static WRITE_RED: number;
    // private blendFunction: Optional<BlendFunction>;
    // private writeMask: number;
    blendFunction(): Optional<BlendFunction>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    writeAlpha(): boolean;
    writeBlue(): boolean;
    writeGreen(): boolean;
    writeMask(): number;
    writeRed(): boolean;
}