import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TgfLabelProvider<V extends Object | number | string | boolean> extends Object{
    getEdgeLabel(arg0: number): string;
    getVertexLabel(arg0: V): string;
}