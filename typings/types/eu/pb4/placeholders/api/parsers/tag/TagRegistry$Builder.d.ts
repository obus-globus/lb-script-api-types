import type { TagRegistry } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TagRegistry.d.ts'
import type { TextTag } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/TextTag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TagRegistry$Builder extends Object {
    constructor(arg0: TagRegistry)
    // private registry: TagRegistry;
    add(arg0: TextTag): TagRegistry$Builder;
    build(): TagRegistry;
    copy(arg0: TagRegistry): TagRegistry$Builder;
    remove(arg0: TextTag): TagRegistry$Builder;
    remove(arg0: string): TagRegistry$Builder;
}