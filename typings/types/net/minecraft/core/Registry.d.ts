import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
export class Registry<T extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT: number;
    static register<T extends unknown>(paramregistry: Object[], paramname: string, paramvalue: T): T;
    static register<V extends unknown, T extends V>(paramregistry: V[], paramlocation: Identifier, paramvalue: T): T;
    static register<V extends unknown, T extends V>(paramregistry: V[], paramkey: ResourceKey<V>, paramvalue: T): T;
    static registerForHolder<R extends unknown, T extends R>(paramregistry: R[], paramlocation: Identifier, paramvalue: T): Holder$Reference<T>;
    static registerForHolder<R extends unknown, T extends R>(paramregistry: R[], paramkey: ResourceKey<R>, paramvalue: T): Holder$Reference<T>;
}