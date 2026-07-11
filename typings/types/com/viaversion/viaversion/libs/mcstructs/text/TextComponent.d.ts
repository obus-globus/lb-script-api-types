import type { ConsumerTracking } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/ConsumerTracking.d.ts'
import type { Copyable } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Copyable.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Style } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/Style.d.ts'
import type { TextComponent$ComponentConsumer } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent$ComponentConsumer.d.ts'
import type { TextFormatting } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { KeybindComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/KeybindComponent.d.ts'
import type { NbtComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/NbtComponent.d.ts'
import type { ObjectComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ObjectComponent.d.ts'
import type { ScoreComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ScoreComponent.d.ts'
import type { SelectorComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/SelectorComponent.d.ts'
import type { StringComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/StringComponent.d.ts'
import type { TranslationComponent } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/TranslationComponent.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TextComponent extends Object implements Copyable<TextComponent> {
    static atlasSprite(paramarg0: Identifier): ObjectComponent;
    static atlasSprite(paramarg0: Identifier, paramarg1: Identifier): ObjectComponent;
    static atlasSprite(paramarg0: Identifier, paramarg1: Identifier, paramarg2: TextComponent): ObjectComponent;
    static atlasSprite(paramarg0: Identifier, paramarg1: TextComponent): ObjectComponent;
    static blockNbt(paramarg0: string, paramarg1: boolean, paramarg2: TextComponent, paramarg3: string): NbtComponent;
    static blockNbt(paramarg0: string, paramarg1: boolean, paramarg2: string): NbtComponent;
    static empty(): StringComponent;
    static entityNbt(paramarg0: string, paramarg1: boolean, paramarg2: TextComponent, paramarg3: string): NbtComponent;
    static entityNbt(paramarg0: string, paramarg1: boolean, paramarg2: string): NbtComponent;
    static keybind(paramarg0: string): KeybindComponent;
    static of(...paramarg0: (Object | null)[]): TextComponent;
    static of(paramarg0: TextComponent[]): TextComponent;
    static of(...paramarg0: (Object | null)[]): TextComponent;
    static of(paramarg0: string): StringComponent;
    static score(paramarg0: string, paramarg1: string): ScoreComponent;
    static score(paramarg0: string, paramarg1: string, paramarg2: string): ScoreComponent;
    static selector(paramarg0: string): SelectorComponent;
    static selector(paramarg0: string, paramarg1: TextComponent): SelectorComponent;
    static storageNbt(paramarg0: string, paramarg1: boolean, paramarg2: Identifier): NbtComponent;
    static storageNbt(paramarg0: string, paramarg1: boolean, paramarg2: TextComponent, paramarg3: Identifier): NbtComponent;
    static translation(paramarg0: string, ...paramarg1: (Object | null)[]): TranslationComponent;
    static translation(paramarg0: string, paramarg1: Object[]): TranslationComponent;
    constructor()
    // private level: number;
    readonly siblings: TextComponent[];
    readonly style: Style;
    append(arg0: TextComponent): TextComponent;
    append(...arg0: TextComponent[]): TextComponent;
    append(...arg0: string[]): TextComponent;
    append(arg0: TextComponent[]): TextComponent;
    asLegacyFormatString(): string;
    asSingleString(): string;
    asSingleString(arg0: ConsumerTracking, arg1: (param0: Object | null) => void): void;
    asUnformattedString(): string;
    asUnformattedString(arg0: ConsumerTracking): string;
    canEqual(arg0: Object): boolean;
    copy(): TextComponent;
    copyMetaTo<C extends TextComponent>(arg0: C): C;
    equals(arg0: Object | null): boolean;
    forEach(arg0: (param0: TextComponent) => void): TextComponent;
    formatted(arg0: TextFormatting): TextComponent;
    getSiblings(): TextComponent[];
    getStyle(): Style;
    hashCode(): number;
    mergeSiblingParentStyle(): TextComponent;
    // private setLevel(arg0: number): void;
    setParentStyle(arg0: Style): TextComponent;
    setSiblingParentStyle(): TextComponent;
    setStyle(arg0: Style): TextComponent;
    shallowCopy(): TextComponent;
    styled(arg0: (param0: Style) => void): TextComponent;
    toString(): string;
    visit(arg0: ConsumerTracking, arg1: (param0: Object | null) => void): void;
}