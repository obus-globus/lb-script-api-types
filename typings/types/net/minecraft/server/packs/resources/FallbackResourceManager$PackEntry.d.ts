import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
export class FallbackResourceManager$PackEntry extends Record {
    private constructor(name: string, resources: PackResources, filter: (param0: Identifier) => kotlin.Boolean)
    // private filter: (param0: Identifier) => kotlin.Boolean;
    // private name: string;
    // private resources: PackResources;
    equals(o: Object | null): boolean;
    filter(): (param0: Identifier) => kotlin.Boolean;
    filterAll(collection: E[]): void;
    hashCode(): number;
    isFiltered(location: Identifier): boolean;
    name(): string;
    resources(): PackResources;
    toString(): string;
}