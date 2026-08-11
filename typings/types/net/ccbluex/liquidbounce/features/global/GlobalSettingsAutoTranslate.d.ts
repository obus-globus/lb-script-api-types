import type { Cache } from '../../../../../com/google/common/cache/Cache.d.ts'
import type { Lazy } from '../../../../../kotlin/Lazy.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslationResult$Success } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult$Success.d.ts'
import type { TranslatorApi } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.d.ts'
import type { GoogleTranslateApi } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { TranslationCacheKey } from '../../../../../net/ccbluex/liquidbounce/features/global/TranslationCacheKey.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class GlobalSettingsAutoTranslate extends ValueGroup implements TranslatorApi, EventListener {
    static INSTANCE: GlobalSettingsAutoTranslate;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private providers: ModeValueGroup<GoogleTranslateApi>;
    readonly running: boolean;
    // private /*not mapped: */ getTranslationCache(): Cache<TranslationCacheKey, TranslationResult$Success>;
    // private translationLazyCache: Lazy<Cache<TranslationCacheKey, TranslationResult$Success>>;
    children(): EventListener[];
    parent(): EventListener | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translate(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string, $completion: Continuation<TranslationResult>): any;
    unregister(): void;
}