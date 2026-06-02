import type { TagRegistry } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { TagRegistry$Builder } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry$Builder.d.ts'
import type { TextTag } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WrappingTagRegistry extends Record implements TagRegistry {
    static DEFAULT: TagRegistry;
    static SAFE: TagRegistry;
    static builder(): TagRegistry$Builder;
    static builderCopyDefault(): TagRegistry$Builder;
    static builderCopySafe(): TagRegistry$Builder;
    static builderWithDefault(): TagRegistry$Builder;
    static builderWithSafe(): TagRegistry$Builder;
    static copyDefault(): TagRegistry;
    static copySafe(): TagRegistry;
    static create(): TagRegistry;
    static createDefault(): TagRegistry;
    static createSafe(): TagRegistry;
    static of(paramarg0: TagRegistry): WrappingTagRegistry;
    static registerDefault(paramarg0: TextTag): void;
    constructor(source: TagRegistry, mutable: TagRegistry, removed: TextTag[])
    // private mutable: TagRegistry;
    // private removed: TextTag[];
    // private source: TagRegistry;
    copy(): TagRegistry;
    equals(arg0: Object | null): boolean;
    getTag(arg0: string): TextTag;
    getTags(): TextTag[];
    hashCode(): number;
    isGlobal(): boolean;
    mutable(): TagRegistry;
    register(arg0: TextTag): void;
    remove(arg0: TextTag): void;
    removed(): TextTag[];
    source(): TagRegistry;
    toString(): string;
}