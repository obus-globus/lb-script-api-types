import type { ConsumerTracking } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/ConsumerTracking.d.ts'
import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { TextComponent$ComponentConsumer } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent$ComponentConsumer.d.ts'
import type { KeybindComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/KeybindComponent.d.ts'
import type { NbtComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/NbtComponent.d.ts'
import type { ObjectComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ObjectComponent.d.ts'
import type { SelectorComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/SelectorComponent.d.ts'
import type { StringComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/StringComponent.d.ts'
import type { TranslationComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/TranslationComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ScoreComponent extends TextComponent {
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
    static of(paramarg0: (Object | null)[]): TextComponent;
    static of(paramarg0: TextComponent[]): TextComponent;
    static of(paramarg0: (Object | null)[]): TextComponent;
    static of(paramarg0: string): StringComponent;
    static score(paramarg0: string, paramarg1: string): ScoreComponent;
    static score(paramarg0: string, paramarg1: string, paramarg2: string): ScoreComponent;
    static selector(paramarg0: string): SelectorComponent;
    static selector(paramarg0: string, paramarg1: TextComponent): SelectorComponent;
    static storageNbt(paramarg0: string, paramarg1: boolean, paramarg2: Identifier): NbtComponent;
    static storageNbt(paramarg0: string, paramarg1: boolean, paramarg2: TextComponent, paramarg3: Identifier): NbtComponent;
    static translation(paramarg0: string, paramarg1: (Object | null)[]): TranslationComponent;
    static translation(paramarg0: string, paramarg1: Object[]): TranslationComponent;
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly name: string;
    readonly objective: string;
    readonly value: string;
    asSingleString(): string;
    asSingleString(arg0: ConsumerTracking, arg1: (param0: Object | null) => void): void;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getObjective(): string;
    getValue(): string;
    hashCode(): number;
    setName(arg0: string): ScoreComponent;
    setObjective(arg0: string): ScoreComponent;
    setValue(arg0: string): ScoreComponent;
    shallowCopy(): TextComponent;
    toString(): string;
}