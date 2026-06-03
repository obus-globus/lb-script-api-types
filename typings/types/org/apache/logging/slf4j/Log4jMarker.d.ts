import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { IMarkerFactory } from '../../../../org/slf4j/IMarkerFactory.d.ts'
import type { Marker as Marker_2 } from '../../../../org/slf4j/Marker.d.ts'
export class Log4jMarker extends Object implements Marker_2 {
    static ANY_MARKER: string;
    static ANY_NON_NULL_MARKER: string;
    static serialVersionUID: number;
    constructor(markerFactory: IMarkerFactory, marker: Marker)
    // private factory: IMarkerFactory;
    // private marker: Marker;
    add(marker: Marker_2): void;
    contains(s: string): boolean;
    contains(marker: Marker_2): boolean;
    equals(obj: Object | null): boolean;
    getLog4jMarker(): Marker;
    getName(): string;
    hasChildren(): boolean;
    hasReferences(): boolean;
    hashCode(): number;
    iterator(): Iterator<Marker_2>;
    remove(marker: Marker_2): boolean;
}