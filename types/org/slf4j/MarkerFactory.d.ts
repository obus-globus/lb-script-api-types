import type { Object } from '../../java/lang/Object.d.ts'
import type { IMarkerFactory } from '../../org/slf4j/IMarkerFactory.d.ts'
import type { Marker } from '../../org/slf4j/Marker.d.ts'
export class MarkerFactory extends Object {
    static getDetachedMarker(paramarg0: string): Marker;
    static getIMarkerFactory(): IMarkerFactory;
    static getMarker(paramarg0: string): Marker;
    private constructor()
}