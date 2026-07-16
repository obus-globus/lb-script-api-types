import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OsgiServiceLocator extends Object {
    static isAvailable(): boolean;
    static loadServices<T extends unknown>(paramserviceType: Class<T>, paramlookup: MethodHandles$Lookup): Stream<T>;
    static loadServices<T extends unknown>(paramserviceType: Class<T>, paramlookup: MethodHandles$Lookup, paramverbose: boolean): Stream<T>;
    constructor()
}