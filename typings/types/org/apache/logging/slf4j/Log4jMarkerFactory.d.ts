import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { IMarkerFactory } from '../../../../org/slf4j/IMarkerFactory.d.ts'
import type { Marker } from '../../../../org/slf4j/Marker.d.ts'
export class Log4jMarkerFactory extends Object implements IMarkerFactory {
    constructor()
    // private markerMap: { [key: string]: Marker };
    // private addMarkerIfAbsent(name: string, log4jMarker: Marker): Marker;
    detachMarker(name: string): boolean;
    exists(name: string): boolean;
    getDetachedMarker(name: string): Marker;
    getLog4jMarker(marker: Marker): Marker;
    getMarker(name: string): Marker;
    getMarker(marker: Marker): Marker;
}