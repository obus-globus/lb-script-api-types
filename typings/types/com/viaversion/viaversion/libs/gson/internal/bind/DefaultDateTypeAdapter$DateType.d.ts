import type { TypeAdapterFactory } from '../../../../../../../com/viaversion/viaversion/libs/gson/TypeAdapterFactory.d.ts'
import type { DefaultDateTypeAdapter } from '../../../../../../../com/viaversion/viaversion/libs/gson/internal/bind/DefaultDateTypeAdapter.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DefaultDateTypeAdapter$DateType<T extends Date> extends Object {
    static DATE: DefaultDateTypeAdapter$DateType<Date>;
    constructor(arg0: Class<T>)
    // private dateClass: Class<T>;
    createAdapterFactory(arg0: number, arg1: number): TypeAdapterFactory;
    createAdapterFactory(arg0: string): TypeAdapterFactory;
    // private createFactory(arg0: DefaultDateTypeAdapter<T>): TypeAdapterFactory;
    deserialize(arg0: Date): T;
}