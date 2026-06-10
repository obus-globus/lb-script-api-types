import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphProvider } from '../../../../../../de/odysseus/ithaka/digraph/DigraphProvider.d.ts'
import type { DotAttribute } from '../../../../../../de/odysseus/ithaka/digraph/io/dot/DotAttribute.d.ts'
import type { DotExporter$Cluster } from '../../../../../../de/odysseus/ithaka/digraph/io/dot/DotExporter$Cluster.d.ts'
import type { DotProvider } from '../../../../../../de/odysseus/ithaka/digraph/io/dot/DotProvider.d.ts'
import type { Writer } from '../../../../../../java/io/Writer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export class DotExporter extends Object {
    constructor()
    constructor(arg0: string, arg1: string)
    // private indent: string;
    // private lineSpeparator: string;
    // private createClusters<V extends Object | number | string | boolean, G extends Digraph<V>>(arg0: G, arg1: DotProvider<V, G>, arg2: DigraphProvider<V, G>): Map<V, DotExporter$Cluster<V, G>>;
    export<V extends Object | number | string | boolean, G extends Digraph<V>>(arg0: DotProvider<V, G>, arg1: G, arg2: DigraphProvider<V, G>, arg3: Writer): void;
    // private indent(arg0: Writer, arg1: number): void;
    // private writeAttributes(arg0: Writer, arg1: Iterator<DotAttribute>): void;
    // private writeCluster<V extends Object | number | string | boolean, G extends Digraph<V>>(arg0: Writer, arg1: number, arg2: DotProvider<V, G>, arg3: V, arg4: DotExporter$Cluster<V, G>, arg5: DigraphProvider<V, G>): void;
    // private writeDefaultAttributes(arg0: Writer, arg1: number, arg2: string, arg3: DotAttribute[]): void;
    // private writeEdge<V extends Object | number | string | boolean>(arg0: Writer, arg1: number, arg2: V, arg3: V, arg4: number, arg5: DotProvider<V, Object>, arg6: DotExporter$Cluster<V, Object>, arg7: DotExporter$Cluster<V, Object>): void;
    // private writeNode<V extends Object | number | string | boolean>(arg0: Writer, arg1: number, arg2: V, arg3: DotProvider<V, Object>): void;
    // private writeNodesAndEdges<V extends Object | number | string | boolean, G extends Digraph<V>>(arg0: Writer, arg1: number, arg2: DotProvider<V, G>, arg3: G, arg4: Map<V, DotExporter$Cluster<V, G>>, arg5: DigraphProvider<V, G>): void;
}