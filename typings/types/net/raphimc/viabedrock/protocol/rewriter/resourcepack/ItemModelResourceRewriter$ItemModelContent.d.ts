import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { InMemoryContent } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/content/InMemoryContent.d.ts'
import type { ItemModelResourceRewriter } from '../../../../../../net/raphimc/viabedrock/protocol/rewriter/resourcepack/ItemModelResourceRewriter.d.ts'
export class ItemModelResourceRewriter$ItemModelContent extends InMemoryContent {
    constructor(null_: ItemModelResourceRewriter, arg1: string)
    // private itemPath: string;
    // private modelDefinitions: { [key: string]: string };
    generateItemDefinition(): void;
    putModel(arg0: string, arg1: JsonObject): void;
}