import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntrypointMetadata as EntrypointMetadata_2 } from '../../../../../net/fabricmc/loader/metadata/EntrypointMetadata.d.ts'
export interface EntrypointMetadata extends Object, EntrypointMetadata_2{
    getAdapter(): string;
    getValue(): string;
}