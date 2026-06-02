import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { FormattedText } from '../../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export class EnchantmentNames extends Object {
    static getInstance(): EnchantmentNames;
    private constructor()
    // private random: RandomSource;
    // private words: string[];
    getRandomName(font: Font, maxWidth: number): FormattedText;
    initSeed(seed: number): void;
}