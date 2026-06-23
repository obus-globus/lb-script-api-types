import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDigraph$VertexMapFactory<V extends unknown> extends Object{
    create(): Map<V, { [key: string]: any }>;
}