import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
import type { IMarkerFactory } from '../../../../org/slf4j/IMarkerFactory.d.ts'
import type { Marker as Marker_2 } from '../../../../org/slf4j/Marker.d.ts'
export class Log4jMarkerFactory extends Object implements IMarkerFactory {
    constructor()
    // private markerMap: JavaMap<string, Marker_2>;
    // private addMarkerIfAbsent(name: string, log4jMarker: Marker): Marker_2;
    detachMarker(name: string): boolean;
    exists(name: string): boolean;
    getDetachedMarker(name: string): Marker_2;
    getLog4jMarker(marker: Marker_2): Marker;
    getMarker(name: string): Marker_2;
    getMarker(marker: Marker_2): Marker_2;
}