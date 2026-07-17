import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { UnaryOperator } from '../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryAccess } from '../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { Settings$MutableValue } from '../../../../net/minecraft/server/dedicated/Settings$MutableValue.d.ts'
export abstract class Settings<T extends Settings<T>> extends Object {
    static loadFromFile(paramfile: Path): JavaMap<any, any>;
    constructor(properties: JavaMap<any, any>)
    // private properties: JavaMap<any, any>;
    cloneProperties(): JavaMap<any, any>;
    get<V extends unknown>(key: string, deserializer: (param0: string) => V, defaultValue: V): V;
    get<V extends unknown>(key: string, deserializer: (param0: string) => V, serializer: (param0: V) => string, defaultValue: V): V;
    get<V extends unknown>(key: string, deserializer: (param0: string) => V, validator: (param0: V) => V, serializer: (param0: V) => string, defaultValue: V): V;
    get(key: string, validator: (param0: number) => number, defaultValue: number): number;
    get(key: string, defaultValue: boolean): boolean;
    get(key: string, defaultValue: number): number;
    get(key: string, defaultValue: string): string;
    getLegacy<V extends unknown>(key: string, deserializer: (param0: string) => V): V;
    getLegacyBoolean(key: string): boolean;
    getLegacyString(key: string): string;
    getMutable<V extends unknown>(key: string, deserializer: (param0: string) => V, defaultValue: V): Settings$MutableValue<Object>;
    getMutable<V extends unknown>(key: string, deserializer: (param0: string) => V, serializer: (param0: V) => string, defaultValue: V): Settings$MutableValue<Object>;
    getMutable(key: string, defaultValue: boolean): Settings$MutableValue<Object>;
    getMutable(key: string, defaultValue: number): Settings$MutableValue<Object>;
    getMutable(key: string, defaultValue: string): Settings$MutableValue<Object>;
    // private getStringRaw(key: string): string;
    reload(registryAccess: RegistryAccess, properties: JavaMap<any, any>): T;
    store(output: Path): void;
}