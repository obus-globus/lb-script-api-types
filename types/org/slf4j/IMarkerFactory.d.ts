import type { Object } from '../../java/lang/Object.d.ts'
import type { Marker } from '../../org/slf4j/Marker.d.ts'
export interface IMarkerFactory extends Object{
    detachMarker(arg0: string): boolean;
    exists(arg0: string): boolean;
    getDetachedMarker(arg0: string): Marker;
    getMarker(arg0: string): Marker;
}