import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/metadata/EntrypointMetadata.d.ts'
export interface EntrypointMetadata extends Object, EntrypointMetadata{
    getAdapter(): string;
    getValue(): string;
}