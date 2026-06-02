import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDigraph$EdgeMapFactory<V extends Object | number | string | boolean> extends Object{
    create(arg0: V): Object2IntMap<V>;
}