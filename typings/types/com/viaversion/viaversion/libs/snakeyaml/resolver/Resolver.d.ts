import type { NodeId } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/NodeId.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { ResolverTuple } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/resolver/ResolverTuple.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Resolver extends Object {
    static BOOL: Pattern;
    static EMPTY: Pattern;
    static FLOAT: Pattern;
    static INT: Pattern;
    static MERGE: Pattern;
    static NULL: Pattern;
    static TIMESTAMP: Pattern;
    static VALUE: Pattern;
    static YAML: Pattern;
    constructor()
    // private yamlImplicitResolvers: { [key: string]: ResolverTuple[] };
    addImplicitResolver(arg0: Tag, arg1: Pattern, arg2: string): void;
    addImplicitResolver(arg0: Tag, arg1: Pattern, arg2: string, arg3: number): void;
    addImplicitResolvers(): void;
    resolve(arg0: NodeId, arg1: string, arg2: boolean): Tag;
}