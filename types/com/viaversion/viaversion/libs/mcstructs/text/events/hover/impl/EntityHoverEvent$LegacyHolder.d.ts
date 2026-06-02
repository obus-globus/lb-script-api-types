import type { TextComponent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { EntityHoverEvent$DataHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent$DataHolder.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class EntityHoverEvent$LegacyHolder extends Object implements EntityHoverEvent$DataHolder {
    constructor(arg0: TextComponent)
    readonly data: TextComponent;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getData(): TextComponent;
    hashCode(): number;
    setData(arg0: TextComponent): void;
    toString(): string;
}