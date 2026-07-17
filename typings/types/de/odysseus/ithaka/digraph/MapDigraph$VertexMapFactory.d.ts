import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDigraph$VertexMapFactory<V extends unknown> extends Object{
    create(): JavaMap<V, JavaMap<any, any>>;
}