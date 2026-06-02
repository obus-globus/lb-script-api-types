import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TranslateLanguage } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslateLanguage.d.ts'
import type { TranslationResult } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/translator/TranslationResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TranslationResult$Success extends TranslationResult {
    constructor(origin: string, translation: string, fromLanguage: TranslateLanguage, toLanguage: TranslateLanguage)
    readonly fromLanguage: TranslateLanguage;
    readonly origin: string;
    readonly toLanguage: TranslateLanguage;
    readonly translation: string;
    component1(): string;
    component2(): string;
    component3(): TranslateLanguage;
    component4(): TranslateLanguage;
    copy(origin: string, translation: string, fromLanguage: TranslateLanguage, toLanguage: TranslateLanguage): TranslationResult$Success;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toResultText(): Component;
    toString(): string;
}