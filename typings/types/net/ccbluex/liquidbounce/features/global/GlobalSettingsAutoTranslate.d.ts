import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { TranslateLanguage } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { TranslatorApi } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslatorApi.d.ts'
import type { GoogleTranslateApi } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/providers/GoogleTranslateApi.d.ts'
import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class GlobalSettingsAutoTranslate extends ValueGroup implements TranslatorApi, EventListener {
    static INSTANCE: GlobalSettingsAutoTranslate;
    static translate$suspendImpl(paramarg0: TranslatorApi, paramarg1: TranslateLanguage, paramarg2: TranslateLanguage, paramarg3: string, paramarg4: Continuation<Object>): Object;
    readonly debugDisplayName: Component;
    // private providers: ModeValueGroup<GoogleTranslateApi>;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    translate(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
    translateInternal(sourceLanguage: TranslateLanguage, targetLanguage: TranslateLanguage, text: string): TranslationResult;
    unregister(): void;
}