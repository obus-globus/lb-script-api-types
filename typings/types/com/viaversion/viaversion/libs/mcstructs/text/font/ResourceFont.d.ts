import type { Identifier } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { FontDescription } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/font/FontDescription.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ResourceFont extends Object implements FontDescription {
    constructor()
    constructor(arg0: Identifier)
    id: Identifier;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getId(): Identifier;
    hashCode(): number;
    setId(arg0: Identifier): void;
    toString(): string;
}