import type { Funnel } from '../../../../com/google/common/hash/Funnel.d.ts'
import type { PrimitiveSink } from '../../../../com/google/common/hash/PrimitiveSink.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Funnels$ByteArrayFunnel extends Enum<Funnels$ByteArrayFunnel> implements Funnel<number[]> {
    static INSTANCE: Funnels$ByteArrayFunnel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Funnels$ByteArrayFunnel;
    static values(): Funnels$ByteArrayFunnel[];
    private constructor()
    funnel(from: number[], into: PrimitiveSink): void;
    toString(): string;
    name(): "INSTANCE";
}