import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { StringBuilderFormattable } from '../../../../org/apache/logging/log4j/util/StringBuilderFormattable.d.ts'
export class MarkerManager$Log4jMarker extends Object implements Marker, StringBuilderFormattable {
    constructor(name: string)
    readonly name: string;
    readonly parents: Marker[];
    addParents(...parentMarkers: Marker[]): Marker;
    equals(o: Object | null): boolean;
    formatTo(sb: StringBuilder): void;
    getName(): string;
    getParents(): Marker[];
    hasParents(): boolean;
    hashCode(): number;
    isInstanceOf(markerName: string): boolean;
    isInstanceOf(marker: Marker): boolean;
    remove(parent: Marker): boolean;
    setParents(...markers: Marker[]): Marker;
    toString(): string;
}