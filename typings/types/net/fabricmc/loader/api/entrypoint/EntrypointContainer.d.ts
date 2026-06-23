import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModContainer } from '../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
export interface EntrypointContainer<T extends unknown> extends Object{
    getDefinition(): string;
    getEntrypoint(): T;
    getProvider(): ModContainer;
}