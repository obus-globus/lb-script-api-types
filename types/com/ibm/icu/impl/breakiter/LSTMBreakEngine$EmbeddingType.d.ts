import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LSTMBreakEngine$EmbeddingType extends Enum<LSTMBreakEngine$EmbeddingType> {
    static CODE_POINTS: LSTMBreakEngine$EmbeddingType;
    static GRAPHEME_CLUSTER: LSTMBreakEngine$EmbeddingType;
    static UNKNOWN: LSTMBreakEngine$EmbeddingType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LSTMBreakEngine$EmbeddingType;
    static values(): (Object | null)[];
    private constructor()
    name(): "UNKNOWN" | "CODE_POINTS" | "GRAPHEME_CLUSTER";
}