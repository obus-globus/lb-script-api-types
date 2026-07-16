import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Padder$PadPosition extends Enum<Padder$PadPosition> {
    static AFTER_PREFIX: Padder$PadPosition;
    static AFTER_SUFFIX: Padder$PadPosition;
    static BEFORE_PREFIX: Padder$PadPosition;
    static BEFORE_SUFFIX: Padder$PadPosition;
    static fromOld(paramold: number): Padder$PadPosition;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Padder$PadPosition;
    static values(): Padder$PadPosition[];
    private constructor()
    toOld(): number;
    name(): "BEFORE_PREFIX" | "AFTER_PREFIX" | "BEFORE_SUFFIX" | "AFTER_SUFFIX";
}