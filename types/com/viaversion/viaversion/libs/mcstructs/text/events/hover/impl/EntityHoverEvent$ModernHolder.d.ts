import type { Identifier } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { TextComponent } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { EntityHoverEvent$DataHolder } from '../../../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/events/hover/impl/EntityHoverEvent$DataHolder.d.ts'
import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class EntityHoverEvent$ModernHolder extends Object implements EntityHoverEvent$DataHolder {
    constructor(arg0: Identifier, arg1: UUID, arg2: TextComponent)
    readonly name: TextComponent;
    readonly type: Identifier;
    readonly uuid: UUID;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getName(): TextComponent;
    getType(): Identifier;
    getUuid(): UUID;
    hashCode(): number;
    setName(arg0: TextComponent): void;
    setType(arg0: Identifier): void;
    setUuid(arg0: UUID): void;
    toString(): string;
}