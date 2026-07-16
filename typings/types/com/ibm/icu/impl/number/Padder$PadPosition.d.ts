import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Padder$PadPosition extends Enum<Padder$PadPosition> {
    static AFTER_PREFIX: Padder$PadPosition;
    static AFTER_SUFFIX: Padder$PadPosition;
    static BEFORE_PREFIX: Padder$PadPosition;
    static BEFORE_SUFFIX: Padder$PadPosition;
    static fromOld(paramarg0: number): Padder$PadPosition;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Padder$PadPosition;
    static values(): Padder$PadPosition[];
    private constructor()
    toOld(): number;
    name(): "BEFORE_PREFIX" | "AFTER_PREFIX" | "BEFORE_SUFFIX" | "AFTER_SUFFIX";
}