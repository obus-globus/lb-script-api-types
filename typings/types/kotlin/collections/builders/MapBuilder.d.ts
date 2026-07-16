import type { Object } from '../../../java/lang/Object.d.ts'
import type { MapBuilder$Companion } from '../../../kotlin/collections/builders/MapBuilder$Companion.d.ts'
export class MapBuilder<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static Companion: MapBuilder$Companion;
}