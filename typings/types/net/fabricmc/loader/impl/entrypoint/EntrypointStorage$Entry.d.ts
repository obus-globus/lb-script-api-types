import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModContainerImpl } from '../../../../../net/fabricmc/loader/impl/ModContainerImpl.d.ts'
export interface EntrypointStorage$Entry extends Object{
    getDefinition(): string;
    getModContainer(): ModContainerImpl;
    getOrCreate<T extends unknown>(arg0: Class<T>): T;
    isOptional(): boolean;
}