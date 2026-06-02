import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Funnels$UnencodedCharsFunnel extends Enum<Funnels$UnencodedCharsFunnel> implements Funnel<CharSequence> {
    static INSTANCE: Funnels$UnencodedCharsFunnel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Funnels$UnencodedCharsFunnel;
    static values(): (Object | null)[];
    private constructor()
    funnel(from: CharSequence, into: PrimitiveSink): void;
    toString(): string;
    name(): "INSTANCE";
}