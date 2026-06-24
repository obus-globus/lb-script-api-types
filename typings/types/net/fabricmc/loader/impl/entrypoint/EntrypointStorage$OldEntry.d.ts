import type { EntrypointStorage$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModContainerImpl } from '../../../../../net/fabricmc/loader/impl/ModContainerImpl.d.ts'
import type { EntrypointStorage$Entry } from '../../../../../net/fabricmc/loader/impl/entrypoint/EntrypointStorage$Entry.d.ts'
export class EntrypointStorage$OldEntry extends Object implements EntrypointStorage$Entry {
    private constructor(arg0: ModContainerImpl, arg1: string, arg2: string)
    constructor(arg0: ModContainerImpl, arg1: string, arg2: string, arg3: EntrypointStorage$1)
    // private languageAdapter: string;
    // private mod: ModContainerImpl;
    // private object: Object;
    // private value: string;
    getDefinition(): string;
    getModContainer(): ModContainerImpl;
    getOrCreate<T extends unknown>(arg0: Class<T>): T;
    isOptional(): boolean;
    toString(): string;
}