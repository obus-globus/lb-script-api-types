import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LanguageAdapter } from '../../../../../net/fabricmc/loader/api/LanguageAdapter.d.ts'
import type { ModContainerImpl } from '../../../../../net/fabricmc/loader/impl/ModContainerImpl.d.ts'
import type { EntrypointStorage$Entry } from '../../../../../net/fabricmc/loader/impl/entrypoint/EntrypointStorage$Entry.d.ts'
export class EntrypointStorage$NewEntry extends Object implements EntrypointStorage$Entry {
    constructor(arg0: ModContainerImpl, arg1: LanguageAdapter, arg2: string)
    // private adapter: LanguageAdapter;
    // private instanceMap: Map<Class<Object>, Object>;
    // private mod: ModContainerImpl;
    // private value: string;
    getDefinition(): string;
    getModContainer(): ModContainerImpl;
    getOrCreate<T extends unknown>(arg0: Class<T>): T;
    isOptional(): boolean;
    toString(): string;
}