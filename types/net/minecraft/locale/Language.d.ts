import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { BiConsumer } from '../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export abstract class Language extends Object {
    static DEFAULT: string;
    static getInstance(): Language;
    static inject(paramlanguage: Language): void;
    static loadFromJson(paramstream: InputStream, paramoutput: (param0: string, param1: string) => void): void;
    constructor()
    getOrDefault(elementId: string): string;
    getOrDefault(elementId: string, defaultValue: string): string;
    getVisualOrder(lines: FormattedText[]): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    getVisualOrder(logicalOrderText: FormattedText): (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    has(elementId: string): boolean;
    isDefaultRightToLeft(): boolean;
}