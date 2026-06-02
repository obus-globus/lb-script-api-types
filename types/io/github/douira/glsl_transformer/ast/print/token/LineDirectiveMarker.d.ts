import type { Marker } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/token/Marker.d.ts'
import type { PresentSourceLocation } from '../../../../../../../io/github/douira/glsl_transformer/ast/transform/PresentSourceLocation.d.ts'
export class LineDirectiveMarker extends Marker {
    constructor(arg0: PresentSourceLocation)
    location: PresentSourceLocation;
}