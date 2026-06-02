import type { Object } from '../../../java/lang/Object.d.ts'
import type { IMarkerFactory } from '../../../org/slf4j/IMarkerFactory.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
export class BasicMarkerFactory extends Object implements IMarkerFactory {
    constructor()
    // private markerMap: { [key: string]: Marker };
    detachMarker(arg0: string): boolean;
    exists(arg0: string): boolean;
    getDetachedMarker(arg0: string): Marker;
    getMarker(arg0: string): Marker;
}