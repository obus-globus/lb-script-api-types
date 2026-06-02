import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
export abstract class MarkerMixIn extends Object implements Marker {
    constructor(name: string)
    getName(): string;
    getParents(): Marker[];
}