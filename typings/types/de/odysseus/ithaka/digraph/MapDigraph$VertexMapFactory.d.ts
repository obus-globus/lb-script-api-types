import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDigraph$VertexMapFactory<V extends Object | number | string | boolean> extends Object{
    create(): Map<V, { [key: string]: any }>;
}