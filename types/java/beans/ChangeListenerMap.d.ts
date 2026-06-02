import type { EventListener } from '../../java/util/EventListener.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export abstract class ChangeListenerMap<L extends EventListener> extends Object {
    constructor()
    // private map: { [key: string]: L[] };
    add(arg0: string, arg1: L): void;
    extract(arg0: L): L;
    get(arg0: string): L[];
    getEntries(): Map$Entry<string, L[]>[];
    getListeners(): L[];
    getListeners(arg0: string): L[];
    hasListeners(arg0: string): boolean;
    newArray(arg0: number): L[];
    newProxy(arg0: string, arg1: L): L;
    remove(arg0: string, arg1: L): void;
    set(arg0: string, arg1: L[]): void;
}