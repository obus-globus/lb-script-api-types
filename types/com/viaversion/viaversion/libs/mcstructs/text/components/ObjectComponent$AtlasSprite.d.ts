import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { ObjectComponent$ObjectInfo } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/components/ObjectComponent$ObjectInfo.d.ts'
import type { FontDescription } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ObjectComponent$AtlasSprite extends Object implements ObjectComponent$ObjectInfo {
    static DEFAULT_ATLAS: Identifier;
    constructor(arg0: Identifier)
    constructor(arg0: Identifier, arg1: Identifier)
    readonly atlas: Identifier;
    readonly sprite: Identifier;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getAtlas(): Identifier;
    getDescription(): string;
    getSprite(): Identifier;
    getUpdatedFont(): FontDescription;
    hashCode(): number;
    setAtlas(arg0: Identifier): void;
    setSprite(arg0: Identifier): void;
    toString(): string;
}