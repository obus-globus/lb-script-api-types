import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ComponentMarker } from '../../../../../com/nikoverflow/exploitpreventer/translation/ComponentMarker.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLanguage } from '../../../../../net/minecraft/client/resources/language/ClientLanguage.d.ts'
import type { Language } from '../../../../../net/minecraft/locale/Language.d.ts'
import type { ComponentContents } from '../../../../../net/minecraft/network/chat/ComponentContents.d.ts'
import type { FormattedText } from '../../../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { ResolutionContext } from '../../../../../net/minecraft/network/chat/ResolutionContext.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
export class TranslatableContents extends Object implements ComponentMarker, ComponentContents {
    static MAP_CODEC: MapCodec<TranslatableContents>;
    static NO_ARGS: Object[];
    static isAllowedPrimitiveArgument(paramobject: Object): boolean;
    constructor(key: string, fallback: string, args: Object[])
    readonly args: Object[];
    // private decomposedParts: FormattedText[];
    // private decomposedWith: Language;
    // private ep$isMarked: boolean;
    readonly fallback: string;
    readonly key: string;
    codec(): MapCodec<TranslatableContents>;
    // private decompose(): void;
    // private decomposeTemplate(template: string, decomposedParts: (param0: FormattedText) => void): void;
    // private ep$getLanguage(): ClientLanguage;
    ep$mark(): void;
    equals(o: Object | null): boolean;
    getArgs(): Object[];
    getArgument(index: number): FormattedText;
    getFallback(): string;
    getKey(): string;
    hashCode(): number;
    resolve(context: ResolutionContext, recursionDepth: number): MutableComponent;
    toString(): string;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, currentStyle: Style): Optional<T>;
}