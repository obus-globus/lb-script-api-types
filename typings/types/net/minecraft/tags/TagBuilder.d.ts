import type { Object } from '../../../java/lang/Object.d.ts'
import type { TagBuilderHooks } from '../../../net/fabricmc/fabric/impl/datagen/TagBuilderHooks.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { TagEntry } from '../../../net/minecraft/tags/TagEntry.d.ts'
export class TagBuilder extends Object implements TagBuilderHooks {
    static create(): TagBuilder;
    constructor()
    // private entries: TagEntry[];
//     // private fd69cf54$fabric-data-generation-api-v1$replace$0: boolean;
 // ; invalid because of -    // private remove: (Object | null)[];
    // private replace: boolean;
    add(entry: TagEntry): TagBuilder;
    addElement(id: Identifier): TagBuilder;
    addOptionalElement(id: Identifier): TagBuilder;
    addOptionalTag(id: Identifier): TagBuilder;
    addTag(id: Identifier): TagBuilder;
    build(): TagEntry[];
    fabric_forceAddTag(arg0: Identifier): void;
    fabric_getRemove(): (Object | null)[];
    fabric_isReplaced(): boolean;
    fabric_removeElement(arg0: Identifier): void;
    fabric_removeTag(arg0: Identifier): void;
    fabric_setReplace(arg0: boolean): void;
    setReplace(replace: boolean): TagBuilder;
    shouldReplace(): boolean;
}