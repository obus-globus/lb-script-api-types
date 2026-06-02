import type { PlaceholderContext$ViewObject } from '../../../../../eu/pb4/placeholders/api/PlaceholderContext$ViewObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ViewObjectImpl extends Record implements PlaceholderContext$ViewObject {
    static DEFAULT: PlaceholderContext$ViewObject;
    static of(paramarg0: Identifier): PlaceholderContext$ViewObject;
    constructor(identifier: Identifier)
    // private identifier: Identifier;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): Identifier;
    toString(): string;
}