import type { ClientLanguageAccessor } from '../../../../../com/nikoverflow/exploitpreventer/injection/mixin/vanilla/ClientLanguageAccessor.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Language } from '../../../../../net/minecraft/locale/Language.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ClientLanguage extends Language implements ClientLanguageAccessor {
    static DEFAULT: string;
    static DEFAULT_INSTANCE: Language;
    static ep$ClientLanguage(paramarg0: { [key: string]: string }, paramarg1: boolean): ClientLanguage;
    static getInstance(): Language;
    static inject(paramlanguage: Language): void;
    static loadFrom(paramresourceManager: ResourceManager, paramlanguageStack: string[], paramdefaultRightToLeft: boolean): ClientLanguage;
    static loadFromJson(paramstream: InputStream, paramoutput: (param0: string, param1: string) => void): void;
    private constructor(storage: { [key: string]: string }, defaultRightToLeft: boolean)
    readonly defaultRightToLeft: boolean;
    storage: { [key: string]: string };
    getOrDefault(elementId: string): string;
    getOrDefault(key: string, defaultValue: string): string;
    getVisualOrder(lines: FormattedText[]): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    getVisualOrder(logicalOrderText: FormattedText): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    has(key: string): boolean;
    // private iris$lookupOverriddenEntry(arg0: string): string;
    isDefaultRightToLeft(): boolean;
}