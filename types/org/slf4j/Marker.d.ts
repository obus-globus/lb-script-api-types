import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export interface Marker extends Serializable, Object{
    add(arg0: Marker): void;
    contains(arg0: string): boolean;
    contains(arg0: Marker): boolean;
    getName(): string;
    hasChildren(): boolean;
    hasReferences(): boolean;
    iterator(): Iterator<Marker>;
    remove(arg0: Marker): boolean;
}