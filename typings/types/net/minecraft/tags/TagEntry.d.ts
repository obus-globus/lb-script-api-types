import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { TagEntryAccessor } from '../../../net/fabricmc/fabric/mixin/tag/TagEntryAccessor.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { TagEntry$Lookup } from '../../../net/minecraft/tags/TagEntry$Lookup.d.ts'
import type { ExtraCodecs$TagOrElementLocation } from '../../../net/minecraft/util/ExtraCodecs$TagOrElementLocation.d.ts'
export class TagEntry extends Object implements TagEntryAccessor {
    static CODEC: Codec<TagEntry>;
    static element(paramid: Identifier): TagEntry;
    static optionalElement(paramid: Identifier): TagEntry;
    static optionalTag(paramid: Identifier): TagEntry;
    static tag(paramid: Identifier): TagEntry;
    constructor(id: Identifier, tag: boolean, required: boolean)
    id: Identifier;
    required: boolean;
    tag: boolean;
    build<T extends unknown>(lookup: TagEntry$Lookup<T>, output: (param0: T) => void): boolean;
    // private elementOrTag(): ExtraCodecs$TagOrElementLocation;
    fabric_getId(): Identifier;
    fabric_getTag(): boolean;
    toString(): string;
    verifyIfPresent(elementCheck: (param0: Identifier) => boolean, tagCheck: (param0: Identifier) => boolean): boolean;
    visitOptionalDependencies(output: (param0: Identifier) => void): void;
    visitRequiredDependencies(output: (param0: Identifier) => void): void;
}