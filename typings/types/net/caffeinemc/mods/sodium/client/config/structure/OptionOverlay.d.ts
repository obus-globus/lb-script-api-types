import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OptionBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/OptionBuilderImpl.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class OptionOverlay extends Record {
    constructor(target: Identifier, source: string, change: OptionBuilderImpl<any>)
    // private change: OptionBuilderImpl<any>;
    // private source: string;
    // private target: Identifier;
    change(): OptionBuilderImpl<any>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    source(): string;
    target(): Identifier;
    toString(): string;
}