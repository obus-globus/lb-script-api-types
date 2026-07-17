import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDigraph$EdgeMapFactory<V extends unknown> extends Object{
    create(arg0: V): JavaMap<any, any>;
}