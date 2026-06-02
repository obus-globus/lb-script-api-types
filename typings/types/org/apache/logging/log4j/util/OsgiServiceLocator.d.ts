import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { MethodHandles$Lookup } from '../../../../../java/lang/invoke/MethodHandles$Lookup.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OsgiServiceLocator extends Object {
    static isAvailable(): boolean;
    static loadServices(paramserviceType: Class<Object>, paramlookup: MethodHandles$Lookup): Stream<Object>;
    static loadServices(paramserviceType: Class<Object>, paramlookup: MethodHandles$Lookup, paramverbose: boolean): Stream<Object>;
    constructor()
}