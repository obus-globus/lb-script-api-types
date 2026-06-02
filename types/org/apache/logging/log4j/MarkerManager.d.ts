import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Marker } from '../../../../org/apache/logging/log4j/Marker.d.ts'
export class MarkerManager extends Object {
    static clear(): void;
    static exists(paramkey: string): boolean;
    static getMarker(paramname: string): Marker;
    static getMarker(paramname: string, paramparent: string): Marker;
    static getMarker(paramname: string, paramparent: Marker): Marker;
    private constructor()
}