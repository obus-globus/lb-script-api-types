import type { Marker } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/token/Marker.d.ts'
export class IndentMarker extends Marker {
    static create(paramarg0: number): IndentMarker;
    static indent(): IndentMarker;
    static unindent(): IndentMarker;
    constructor(arg0: number)
    indentDelta: number;
}