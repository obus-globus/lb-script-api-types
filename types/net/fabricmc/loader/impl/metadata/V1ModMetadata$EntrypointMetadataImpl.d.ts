import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntrypointMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/EntrypointMetadata.d.ts'
export class V1ModMetadata$EntrypointMetadataImpl extends Object implements EntrypointMetadata {
    constructor(arg0: string, arg1: string)
    readonly adapter: string;
    readonly value: string;
    getAdapter(): string;
    getValue(): string;
}