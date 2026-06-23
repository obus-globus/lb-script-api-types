import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModContainer } from '../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { EntrypointContainer } from '../../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
import type { EntrypointStorage$Entry } from '../../../../../net/fabricmc/loader/impl/entrypoint/EntrypointStorage$Entry.d.ts'
export class EntrypointContainerImpl<T extends unknown> extends Object implements EntrypointContainer<T> {
    constructor(arg0: string, arg1: Class<T>, arg2: EntrypointStorage$Entry)
    constructor(arg0: EntrypointStorage$Entry, arg1: T)
    // private entry: EntrypointStorage$Entry;
    // private instance: T;
    // private key: string;
    // private type: Class<T>;
    getDefinition(): string;
    getEntrypoint(): T;
    getProvider(): ModContainer;
}