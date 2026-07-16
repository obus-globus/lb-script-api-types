import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Funnels$UnencodedCharsFunnel extends Enum<Funnels$UnencodedCharsFunnel> implements Funnel<CharSequence> {
    static INSTANCE: Funnels$UnencodedCharsFunnel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Funnels$UnencodedCharsFunnel;
    static values(): Funnels$UnencodedCharsFunnel[];
    private constructor()
    funnel(from: CharSequence, into: PrimitiveSink): void;
    toString(): string;
    name(): "INSTANCE";
}