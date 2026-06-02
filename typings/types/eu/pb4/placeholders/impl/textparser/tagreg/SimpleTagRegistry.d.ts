import type { TagRegistry } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { TagRegistry$Builder } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry$Builder.d.ts'
import type { TextTag } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SimpleTagRegistry extends Object implements TagRegistry {
    static DEFAULT: TagRegistry;
    static DEFAULT: TagRegistry;
    static SAFE: TagRegistry;
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
    static registerDefault(paramarg0: TextTag): void;
    constructor(arg0: boolean)
    // private allowOverrides: boolean;
    // private byName: { [key: string]: TextTag };
    // private byNameAlias: { [key: string]: TextTag };
    readonly global: boolean;
    readonly tags: TextTag[];
    copy(): TagRegistry;
    getTag(arg0: string): TextTag;
    getTags(): TextTag[];
    isGlobal(): boolean;
    register(arg0: TextTag): void;
    remove(arg0: TextTag): void;
}