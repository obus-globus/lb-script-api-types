import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class AbstractMap$Companion extends Object {
    entryEquals(e: Map$Entry<Object, Object>, other: Object | null): boolean;
    entryHashCode(e: Map$Entry<Object, Object>): number;
    entryToString(e: Map$Entry<Object, Object>): string;
}