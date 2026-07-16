import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Funnels$LongFunnel extends Enum<Funnels$LongFunnel> implements Funnel<number> {
    static INSTANCE: Funnels$LongFunnel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Funnels$LongFunnel;
    static values(): Funnels$LongFunnel[];
    private constructor()
    funnel(from: number, into: PrimitiveSink): void;
    toString(): string;
    name(): "INSTANCE";
}