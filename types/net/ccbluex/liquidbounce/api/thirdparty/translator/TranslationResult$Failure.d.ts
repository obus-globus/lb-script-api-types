import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TranslationResult } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TranslationResult$Failure extends TranslationResult {
    constructor(ex: Exception)
    readonly ex: Exception;
    component1(): Exception;
    copy(ex: Exception): TranslationResult$Failure;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toResultText(): MutableComponent;
    toString(): string;
}