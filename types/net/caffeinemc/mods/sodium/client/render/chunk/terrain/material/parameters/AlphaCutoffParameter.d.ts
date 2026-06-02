import type { Class } from '../../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../../java/lang/Enum.d.ts'
export class AlphaCutoffParameter extends Enum<AlphaCutoffParameter> {
    static HALF: AlphaCutoffParameter;
    static ONE: AlphaCutoffParameter;
    static TINY: AlphaCutoffParameter;
    static ZERO: AlphaCutoffParameter;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AlphaCutoffParameter;
    static values(): (Object | null)[];
    private constructor()
    name(): "ZERO" | "TINY" | "HALF" | "ONE";
}