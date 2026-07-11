import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Marker extends Serializable, Object{
    addParents(...markers: Marker[]): Marker;
    getName(): string;
    getParents(): Marker[];
    hasParents(): boolean;
    isInstanceOf(name: string): boolean;
    isInstanceOf(m: Marker): boolean;
    remove(marker: Marker): boolean;
    setParents(...markers: Marker[]): Marker;
}