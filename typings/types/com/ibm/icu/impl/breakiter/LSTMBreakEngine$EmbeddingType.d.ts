import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LSTMBreakEngine$EmbeddingType extends Enum<LSTMBreakEngine$EmbeddingType> {
    static CODE_POINTS: LSTMBreakEngine$EmbeddingType;
    static GRAPHEME_CLUSTER: LSTMBreakEngine$EmbeddingType;
    static UNKNOWN: LSTMBreakEngine$EmbeddingType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LSTMBreakEngine$EmbeddingType;
    static values(): LSTMBreakEngine$EmbeddingType[];
    private constructor()
    name(): "UNKNOWN" | "CODE_POINTS" | "GRAPHEME_CLUSTER";
}