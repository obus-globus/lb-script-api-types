import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
export class BasicMarker extends Object implements Marker {
    static ANY_MARKER: string;
    static ANY_NON_NULL_MARKER: string;
    constructor(arg0: string)
    readonly name: string;
    // private referenceList: Marker[];
    add(arg0: Marker): void;
    contains(arg0: string): boolean;
    contains(arg0: Marker): boolean;
    equals(arg0: Object | null): boolean;
    getName(): string;
    hasChildren(): boolean;
    hasReferences(): boolean;
    hashCode(): number;
    iterator(): Iterator<Marker>;
    remove(arg0: Marker): boolean;
    toString(): string;
}